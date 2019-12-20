import { createSelector } from 'reselect';
import { getActiveNoteId } from './getActiveNoteId';
import { getNotesList } from './getNotesList';

export const getActiveNote = createSelector(
    [getNotesList, getActiveNoteId],
    (notes, activeNoteId) => notes.find(note => note.id === activeNoteId),
);
