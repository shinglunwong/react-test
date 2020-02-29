import { INCREMENT, DECREMENT } from './types';

export const addCounter = () => ({ type: INCREMENT });
export const subsCounter = () => ({ type: DECREMENT });