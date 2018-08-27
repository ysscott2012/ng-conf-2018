import {Action} from '@ngrx/store';
import {Authenticate} from '../models/authenticate';
import {UserBase} from '../models/user-base';

export enum AuthActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFailure = '[Auth API] Login Failure',
  Logout = '[Auth] Confirm Logout',
  LogoutCancelled = '[Auth] Logout Cancelled',
  LogoutConfirmed = '[Auth] Logout Confirmed',
  LogoutComplete = '[Auth API] Logout Complete',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: Authenticate) {
  }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: { user: UserBase }) {}
}


export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutConfirmed implements Action {
  readonly type = AuthActionTypes.LogoutConfirmed;
}

export class LogoutCancelled implements Action {
  readonly type = AuthActionTypes.LogoutCancelled;
}

export class LogoutComplete implements Action {
  readonly type = AuthActionTypes.LogoutComplete;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | LogoutCancelled
  | LogoutConfirmed
  | LogoutComplete;
