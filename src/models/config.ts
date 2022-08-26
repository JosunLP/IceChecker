import { ApiUnits } from 'src/types/apiUnits.type';

/**
 * Config
 */
export default class Config {
  /**
   * Api url of config
   */
  public static apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  /**
   * Api key of config
   */
  public static apiKey = '9cf58ae8c607d1de8bd1e30fdb4edfa8';

  /**
   * Api units of config
   */
  public static apiUnits: ApiUnits = 'metric';

  /**
   * Api call sleep of config
   */
  public static apiCallSleep = 600000;

  /**
   * Notification text of config
   */
  public static notificationText = '🍧🍦 ES IST ZEIT FÜR EIN EIS!!! 🥳🥵';
}
