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
                activeNoteId: action.noteId,
            };
        }

        default:
            return state;
    }
}
