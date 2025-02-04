import type { Reducer } from 'redux';
import { CounterActions as Actions} from './actions';
import { CounterAction } from './actions';

export interface CounterState {
  count: number;
}
export const initialState: CounterState = { count: 0 };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case Actions.DECREMENT:
      return { ...state, count: state.count < 1 ? 0 : state.count - 1, };
    case Actions.INCREMENT:
      return { ...state, count: state.count + 1, };

    case Actions.ADD:
      return { ...state, count: state.count + (action.amount ?? 0), };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
