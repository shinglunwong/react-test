import { VISIBLE, HIDDEN } from './types';

export const showModal = () => ({ type: VISIBLE });
export const hideModal = () => ({ type: HIDDEN });