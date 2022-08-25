import { Config } from 'src/models/config';
import { WeatherResponse } from 'src/types/weatherResponse.type';

/**
 * Api connector
 */
export class ApiConnector {
  /**
   * Url  of api connector
   */
  private url: string;

  /**
   * Creates an instance of api connector.
   * @param url
   */
  constructor(url: string) {
    this.url = url;
  }

  /**
   * Gets api connector
   * @returns get
   */
  public async get(lon: number, lat: number): Promise<WeatherResponse> {
    const response = await fetch(this.buildUrl(lon, lat));
    const data: WeatherResponse = await response.json();
    return data;
  }

  /**
   * Builds url
   * @param lon
   * @param lat
   * @returns url
   */
  private buildUrl(lon: number, lat: number): string {
    return `${this.url}?lon=${lon}&lat=${lat}&appid=${Config.apiKey}&units=metric&lang=de`;
  }
}
