import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../scripts/constants';

export const signUp = (data) => ({ type: SIGNUP, payload: data });

export const signUpSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signUpError = () => ({ type: SIGNUP_ERROR });
