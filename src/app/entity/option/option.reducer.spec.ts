import { optionReducer, initialState } from './option.reducer';

describe('Option Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = optionReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
