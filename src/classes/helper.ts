import { TimeMode } from 'src/types/timeMode.type';

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
   * Determines whether date before today is
   * @param date
   * @returns true if date before today
   */
  public static isDateBeforeToday(date: number): boolean {
    const nowDate = new Date().setHours(0, 0, 0, 0);
    const dateDate = new Date(date).setHours(0, 0, 0, 0);
    return dateDate < nowDate;
  }

  /**
   * Sleeps helper
   * @param ms
   * @returns
   */
  public static async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Times of the year
   * @returns
   */
  public static getTimeMode(): TimeMode {
    const month = new Date().getMonth();
    if (month >= 3 && month <= 8) {
      return 'summer';
    }
    return 'winter';
  }

  /**
   * Changes page title
   * @param title
   */
  public static changePageTitle(title: string) {
    document.title = title;
  }
}
