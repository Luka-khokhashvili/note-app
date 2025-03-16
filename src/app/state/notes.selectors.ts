import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesState } from './notes.reducer';

export const selectNotesState = createFeatureSelector<NotesState>('notes');

export const selectNotes = createSelector(
  selectNotesState,
  (state) => state.notes
);

export const selectLoading = createSelector(
  selectNotesState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectNotesState,
  (state) => state.error
);
