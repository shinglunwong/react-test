import { INCREMENT, DECREMENT } from '../actions/types';

export default function (state = 1, action) {
    switch (action.type) {
        case INCREMENT:
            if (state < 10) {
                return state + 1;
            }
            return state;
        case DECREMENT:
            if (state > 1) {
                return state - 1;
            }
            return state;
        default:
            return state;
    }
}