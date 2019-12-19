import { SidebarTabType } from '../../SidebarModule/enums/SidebarTabType';
import { INote } from '../../NotesModule/interfaces/INote';

export interface IRootState {
    activeSidebarTab: SidebarTabType;
    notes: INote[];
    activeNoteId: string | null;
    selectedNotesIds: string[];
}
