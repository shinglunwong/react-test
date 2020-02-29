import { VISIBLE, HIDDEN } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case VISIBLE:
            return true;
        case HIDDEN:
            return false;
        default:
            return state;
    }
}