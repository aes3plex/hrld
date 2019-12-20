import { Action } from 'redux';

export class AddNoteAction implements Action {
    public static readonly type = '[Notes] Add note';

    public readonly type = AddNoteAction.type;
}
