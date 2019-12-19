import { Action } from 'redux';

export class SetActiveNoteAction implements Action {
    public static readonly type = '[Notes] Set active note';

    public readonly type = SetActiveNoteAction.type;

    constructor(public readonly noteId: string) {}
}
