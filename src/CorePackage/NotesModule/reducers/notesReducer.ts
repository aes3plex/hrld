import { IRootState } from '../../MainModule';
import { SetActiveNoteAction } from '../actions/SetActiveNoteAction';

type NotesAction = SetActiveNoteAction;

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

        default:
            return state;
    }
}
