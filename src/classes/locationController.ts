import Message from './messageHandler';

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
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) =>
          reject(this.msg.error('Ein fehler ist aufgetreten: ' + error.message))
      );
    });
  }
}
