import ApiConnector from '../src/classes/apiConnector';
jest.mock('../src/classes/apiConnector');

describe('ApiConnector', () => {
  beforeAll(() => {
    ApiConnector.prototype.get = jest
      .fn()
      .mockReturnValue(new Promise((resolve) => resolve({})));
  }),
    afterAll(() => {
      jest.clearAllMocks();
    }),
    test('get', () => {
      expect(new ApiConnector('url').get(0, 0)).toBeInstanceOf(Promise);
    });
});
