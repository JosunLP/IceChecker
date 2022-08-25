import { H } from 'friendly-helper';
import Message from './MessageHandler';

/**
 * Session
 */
export class Session {
  /**
   * Instance  of session
   */
  private static instance: Session;

  /**
   * Message controller of session
   */
  private static msg = new Message();

  /**
   * Session id of session
   */
  public readonly sessionId: string = H.guid.generate();

  /**
   * Gets instance
   * @returns
   */
  static getInstance() {
    if (!Session.instance && !Session.load()) {
      Session.instance = new Session();
    }
    if (!Session.instance && Session.load()) {
      Session.instance = <Session>Session.load();
    }
    Session.save();
    return Session.instance;
  }

  /**
   * Creates an instance of session.
   */
  private constructor() {
    Session.instance = this;
  }

  /**
   * Sets instance to local storage
   */
  public static save() {
    localStorage.setItem('session', JSON.stringify(this.instance));
  }

  /**
   * Gets instance from local storage
   * @returns
   */
  public static load(): Session | null {
    const session = localStorage.getItem('session');
    if (session) {
      const obj = <Session>JSON.parse(session);
      const result = new Session();
      return result;
    }
    return null;
  }

  /**
   * Reloads session
   */
  public static reloadSession() {
    const session = localStorage.getItem('session');
    if (session) {
      const obj = <Session>JSON.parse(session);
      const result = new Session();
      Session.instance = result;
    }
  }

  /**
   * Resets session
   */
  public static resetSession() {
    localStorage.removeItem('session');
    sessionStorage.removeItem('session');
    this.instance = new Session();
    Session.save();
    location.reload();
    this.msg.info('Session wurde zurückgesetzt');
  }
}
