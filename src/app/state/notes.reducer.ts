import { createReducer, on } from '@ngrx/store';
import * as NotesActions from './notes.actions';
import { Note } from '../interfaces/note';

export interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const initialNotesState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

export const noteReducer = createReducer(
  initialNotesState,

  on(NotesActions.loadNotes, (state) => ({
    ...state,
    loading: true,
  })),
  on(NotesActions.loadNotesSuccess, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(NotesActions.loadNotesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
