import Config from 'src/models/config';
import ApiConnector from './apiConnector';
import Helper from './helper';
import Message from './messageHandler';
import Session from './sessionHandler';

/**
 * Weather controller
 */
export default class WeatherController {
  /**
   * Api connector of weather controller
   */
  private apiConnector: ApiConnector;

  /**
   * Instance  of weather controller
   */
  private static instance: WeatherController;

  /**
   * Temp  of weather controller
   */
  public temp = 0;

  /**
   * Creates an instance of weather controller.
   */
  private constructor() {
    this.apiConnector = new ApiConnector(Config.apiUrl);
    const msg = new Message();
    Notification.requestPermission().then(function (result) {
      if (result === 'granted') {
        msg.success('Es können Benachrichtigungen erhalten werden.');
      }
      if (result === 'denied') {
        msg.error('Es können keine Benachrichtigungen erhalten werden.');
      }
    });
  }

  /**
   * Gets instance
   * @returns instance
   */
  public static getInstance(): WeatherController {
    if (!WeatherController.instance) {
      WeatherController.instance = new WeatherController();
    }
    return WeatherController.instance;
  }

  /**
   * Runs weather controller
   * @returns run
   */
  public async run(): Promise<void> {
    const session = Session.getInstance();
    // const temperature = 35;
    const audio = new Audio('/sounds/ice.mp3');
    const temperature = await this.getTemperature(
      session.coordinates.longitude,
      session.coordinates.latitude
    );
    this.temp = temperature;
    if (
      this.determineIfIce(temperature) &&
      Helper.checkIfTimeStampIsLongerThen24HoursAgo(session.iceTimeStamp)
    ) {
      console.log('It is ice!');
      audio.play();
      new Notification(Config.notificationText);
      document.dispatchEvent(
        new CustomEvent('fireworks', { detail: { temperature } })
      );
      session.iceTimeStamp = Helper.getCurrentTimeStamp();
    }
  }

  /**
   * Gets weather
   * @param lon
   * @param lat
   * @returns weather
   */
  private async getTemperature(lon: number, lat: number): Promise<number> {
    return (await this.apiConnector.get(lon, lat)).main.temp;
  }

  /**
   * Determines if ice
   * @param temperature
   * @returns true if if ice
   */
  private determineIfIce(temperature: number): boolean {
    if (temperature >= 30) {
      return true;
    }
    return false;
  }
}
