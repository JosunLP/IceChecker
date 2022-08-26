/**
 * Helper
 */
export default class Helper {
  public static generateUUid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  /**
   * Gets current time
   * @returns current time
   */
  public static getCurrentTime(): string {
    return new Date().toISOString();
  }

  /**
   * Gets current time stamp
   * @returns current time stamp
   */
  public static getCurrentTimeStamp(): number {
    return new Date().getTime();
  }

  /**
   * Gets current date
   * @returns current date
   */
  public static getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Checks if time stamp is longer then24 hours ago
   * @param timeStamp
   * @returns true if if time stamp is longer then24 hours ago
   */
  public static checkIfTimeStampIsLongerThen24HoursAgo(
    timeStamp: number
  ): boolean {
    const currentTimeStamp = this.getCurrentTimeStamp();
    return currentTimeStamp - timeStamp > 86400000;
  }

  /**
   * Sleeps helper
   * @param ms
   * @returns
   */
  public static async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
