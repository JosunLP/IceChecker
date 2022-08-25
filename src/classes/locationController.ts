import Message from './MessageHandler';

/**
 * Location controller
 */
export class LocationController {
  /**
   * Message Controller of location controller
   */
  private msg = new Message();

  /**
   * Gets current location
   * @returns current location
   */
  public async getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve) => {
      try {
        navigator.geolocation.getCurrentPosition(resolve);
      } catch (error) {
        this.msg.error('Could not get current location');
      }
    });
  }
}
