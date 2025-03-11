import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase } from "@ngrx/data";
import { Course } from "../model/course";

import { EntityCollectionServiceElementsFactory } from "@ngrx/data";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Course", serviceElementsFactory);
  }
}
