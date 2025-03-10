import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {}

let state: CoursesState;

export const adapter = createEntityAdapter<Course>();

const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state, action) => {
    return adapter.setAll(action.courses, state);
  })
);

export const { selectAll } = adapter.getSelectors();
