import { IRootState } from '../../MainModule';
import { SetActiveNoteAction } from '../actions/SetActiveNoteAction';
import { AddNoteAction } from '../actions/AddNoteAction';
import { generateID } from '../../MainModule/common/generateID';

type NotesAction = SetActiveNoteAction | AddNoteAction;

export function notesReducer(
    state: IRootState,
    action: NotesAction,
): IRootState {
    switch (action.type) {
        case SetActiveNoteAction.type: {
            return {
                ...state,
                activeNoteId:
                    state.activeNoteId === action.noteId ? null : action.noteId,
            };
        }

        case AddNoteAction.type: {
            return {
                ...state,
                notes: [...state.notes, {
                    id: generateID(),
                    title: 'Default note title',
                    content: '',
                    createdAt: '01 Jan, 2020',
                },]
            }
        }

        default:
            return state;
    }
}
