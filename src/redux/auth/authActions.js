import { createAction } from "@reduxjs/toolkit";
const SIGNOUTREQUEST = "auth/signOutRequest";
const SIGNOUTSUCCESS = "auth/signOutSuccess";
const SIGNOUTERROR = "auth/signOutError";

export const signUpRequest = createAction("auth/signUpRequest");
export const signUpSuccess = createAction("auth/signUpSuccess");
export const signUpError = createAction("auth/signUpError");

export const signInRequest = createAction("auth/signInRequest");
export const signInSuccess = createAction("auth/signInSuccess");
export const signInError = createAction("auth/signInError");

export const signOutRequest = createAction(SIGNOUTREQUEST);
export const signOutSuccess = createAction(SIGNOUTSUCCESS);
export const signOutError = createAction(SIGNOUTERROR);
