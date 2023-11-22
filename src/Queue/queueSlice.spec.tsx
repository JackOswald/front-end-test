import queueReducer, { updateQueue } from './queueSlice';
import { CustomerType } from './queueSlice';

describe('queueSlice reducer', () => {
  it('should handle the initial state', () => {
    expect(queueReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should update the queue with the provided state', () => {
    const state: CustomerType = [
      {
        expectedTime: '100',
        customer: {
          id: 1,
          name: 'James Dean',
          emailAddress: 'james.dean@gmail.co.uk',
        },
      },
    ];

    const actual = queueReducer(undefined, updateQueue(state));

    expect(actual).toBe(state);
  });
});
