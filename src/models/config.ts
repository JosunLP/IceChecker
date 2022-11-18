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
  public static apiKey = '--YOUR-API-KEY--';

  /**
   * Api units of config
   */
  public static apiUnits: ApiUnits = 'metric';

  /**
   * Api call sleep of config
   */
  public static apiCallSleep = 600000;

  /**
   * Temperature  of config
   */
  public static temperature = {
    winter: 7,
    summer: 30,
  };

  /**
   * Notification text of config summer
   */
  public static notificationTextSummer = '🍧🍦 ES IST ZEIT FÜR EIN EIS!!! 🥳🥵';

  /**
   * Notification text of config summer
   */
  public static notificationTextWinter =
    '☕️🤶🏽 ES IST ZEIT FÜR EINEN GLÜHWEIN!!! 🎄🎅🏼';

  public static audio = {
    summer: '/sounds/ice.mp3',
    winter: '/sounds/wine.mp3',
  };
}
