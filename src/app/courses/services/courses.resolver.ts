import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { CourseEntityService } from "./course-entity.service";
import { filter, first, map, tap } from "rxjs/operators";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(private courseService: CourseEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.courseService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.courseService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
