import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action: { type: string; user: any }) =>
          localStorage.setItem("user", JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action: { type: string }) => {
          localStorage.removeItem("user");
          this.router.navigateByUrl("/login");
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
