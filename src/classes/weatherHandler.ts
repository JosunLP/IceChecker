import { TimeMode } from './../types/timeMode.type';
import Config from 'src/models/config';
import ApiConnector from './apiConnector';
import Helper from './helper';
import Message from './messageHandler';
import Session from './sessionHandler';

/**
 * Weather controller
 */
export default class WeatherHandler {
  /**
   * Api connector of weather controller
   */
  private apiConnector: ApiConnector;

  /**
   * Instance  of weather controller
   */
  private static instance: WeatherHandler;

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
  public static getInstance(): WeatherHandler {
    if (!WeatherHandler.instance) {
      WeatherHandler.instance = new WeatherHandler();
    }
    return WeatherHandler.instance;
  }

  /**
   * Runs weather controller
   * @returns run
   */
  public async run(): Promise<void> {
    const session = Session.getInstance();
    const temperature = 7;
    let audio;
    const mode = Helper.getTimeMode();
    if (mode === 'summer') {
      audio = new Audio(Config.audio.summer);
    } else {
      audio = new Audio(Config.audio.winter);
    }
    // const temperature = await this.getTemperature(
    //   session.coordinates.longitude,
    //   session.coordinates.latitude
    // );
    this.temp = temperature;
    if (
      this.determineIfTemperature(temperature, mode) &&
      Helper.isDateBeforeToday(session.iceTimeStamp)
    ) {
      audio.play();
      switch (mode) {
        case 'summer':
          new Notification(Config.notificationTextSummer);
          break;
        case 'winter':
          new Notification(Config.notificationTextWinter);
          break;
        default:
          break;
      }
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
  private determineIfTemperature(temperature: number, mode: TimeMode): boolean {
    switch (mode) {
      case 'summer':
        if (temperature >= Config.temperature.summer) {
          return true;
        }
        return false;

      case 'winter':
        if (temperature <= Config.temperature.winter) {
          return true;
        }
        return false;

      default:
        return false;
    }
  }
}
