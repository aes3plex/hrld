import { IRootState } from '../../MainModule';

export const getNotesList = (state: IRootState) => state.notes;
