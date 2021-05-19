import { createAction } from '@reduxjs/toolkit'

export const incrementAction = () => ({ type: "INCREMENT" });
export const decrementAction = () => ({ type: "DECREMENT" });
export const resetAction = () => ({ type: "RESET" });

export const incrementActionCreator = createAction('INCREMENT')
export const incrementBySomeValueActionCreator = createAction('INCREMENT')
// Auto-paylaod: incrementBySomeValueActionCreator({value: 100})
