import { Helper } from './classes/helper';
import { WeatherController } from './classes/weatherController';
import { Config } from './models/config';

/**
 * App
 */
export class App {
  /**
   * Active  of app
   */
  public active: boolean;

  private static instance: App;

  public static getInstance(): App {
    if (!this.instance) {
      this.instance = new App();
    }
    return this.instance;
  }

  /**
   * Creates an instance of app.
   */
  private constructor() {
    this.active = false;
    this.main();
  }

  /**
   * Mains app
   */
  private async main(): Promise<void> {
    const weather = WeatherController.getInstance();
    while (true) {
      while (this.active) {
        weather.run();
        await Helper.sleep(Config.apiCallSleep);
      }
      await Helper.sleep(1000);
    }
  }

  /**
   * Starts app
   * @returns start
   */
  public async start(): Promise<void> {
    this.active = true;
  }

  /**
   * Stops app
   * @returns stop
   */
  public async stop(): Promise<void> {
    this.active = false;
  }
}
