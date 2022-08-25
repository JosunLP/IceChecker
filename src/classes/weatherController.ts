import { Config } from 'src/models/config';
import { ApiConnector } from './apiConnector';

/**
 * Weather controller
 */
export class WeatherController {
  /**
   * Api connector of weather controller
   */
  private apiConnector: ApiConnector;

  constructor() {
    this.apiConnector = new ApiConnector(Config.apiUrl);
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
