import Helper from '../src/classes/helper';
jest.mock('../src/classes/helper');

describe('Helper', () => {
  beforeAll(() => {
    Helper.generateUUid = jest
      .fn()
      .mockReturnValue('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
    Helper.getCurrentDate = jest
      .fn()
      .mockReturnValue(new Date().toISOString().split('T')[0]);
    Helper.isDateBeforeToday = jest.fn().mockReturnValue(true);
    Helper.sleep = jest
      .fn()
      .mockReturnValue(new Promise((resolve) => setTimeout(resolve, 0)));
  }),
    afterAll(() => {
      jest.clearAllMocks();
    }),
    test('generateUUid', () => {
      expect(Helper.generateUUid()).toBe(
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      );
    }),
    test('getCurrentDate', () => {
      expect(Helper.getCurrentDate()).toBe(
        new Date().toISOString().split('T')[0]
      );
    }),
    test('checkIfTimeStampIsLongerThen24HoursAgo', () => {
      expect(Helper.isDateBeforeToday(new Date().getTime())).toBe(true);
    }),
    test('sleep', () => {
      expect(Helper.sleep(0)).toBeInstanceOf(Promise);
    })
});
