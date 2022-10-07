import { Coordinates } from 'src/types/coordinates.type';
import Helper from './helper';
import Message from './messageHandler';

/**
 * Session
 */
export default class Session {
  /**
   * Instance  of session
   */
  private static instance: Session;

  /**
   * Message controller of session
   */
  private static msg = new Message();

  /**
   * Ice time stamp of session
   */
  public iceTimeStamp: number;

  /**
   * Coordinates  of session
   */
  public coordinates: Coordinates;

  /**
   * Session id of session
   */
  public sessionId: string = Helper.generateUUid();

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
    this.iceTimeStamp = 0;
    this.coordinates = {
      latitude: 0,
      longitude: 0,
    };
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
      result.iceTimeStamp = obj.iceTimeStamp;
      result.coordinates = obj.coordinates;
      result.sessionId = obj.sessionId;
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
      result.iceTimeStamp = obj.iceTimeStamp;
      result.coordinates = obj.coordinates;
      result.sessionId = obj.sessionId;
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
