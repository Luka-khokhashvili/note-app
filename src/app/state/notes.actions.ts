import { createAction, props } from '@ngrx/store';

export const loadNotes = createAction('[Notes] Load Notes');

export const loadNotesSuccess = createAction(
  '[Notes] Load Notes Success',
  props<{ notes: any }>()
);

export const loadNotesFailure = createAction(
  '[Notes] Load Notes Failure',
  props<{ error: any }>()
);
