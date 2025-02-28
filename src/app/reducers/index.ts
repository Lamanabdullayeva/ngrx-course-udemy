import { isDevMode } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";

import { routerReducer } from "@ngrx/router-store";
import { environment } from "../../environments/environment";

export interface AppState {}

export const initialAuthState: AppState = {};

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("state before: ", state);
    console.log("action", action);

    return reducer(state, action);
  };
}
