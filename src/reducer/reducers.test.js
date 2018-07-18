import mainReducer from './index';
import * as actType from '../actions/actionsType';

describe('reducer', () => {
  it('should return initialState', () => {
    const state = [];
    const initState = mainReducer(state, {});
    expect(initState).toEqual([]);
  });
  it('should handle ADD_TODO', () => {
    const text = 'Some Text';
    expect(
      mainReducer([], {
        type: actType.add,
        id: expect.any(String),
        text,
      }),
    ).toEqual([
      {
        text: 'Some Text',
        id: expect.any(String),
      },
    ]);
    expect(
      mainReducer(
        [
          {
            text: 'Prev Text',
            id: expect.any(String),
          },
        ],
        {
          type: actType.add,
          id: expect.any(String),
          text,
        },
      ),
    ).toEqual([
      {
        text: 'Prev Text',
        id: expect.any(String),
      },
      {
        text: 'Some Text',
        id: expect.any(String),
      },
    ]);
  });
});
