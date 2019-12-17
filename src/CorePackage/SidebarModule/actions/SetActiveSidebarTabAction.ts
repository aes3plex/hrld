import { Action } from 'redux';
import { SidebarTabType } from '../enums/SidebarTabType';

export class SetActiveSidebarTabAction implements Action {
    public static readonly type = '[Sidebar] Set active tab';

    public readonly type = SetActiveSidebarTabAction.type;

    constructor(public readonly sidebarTab: SidebarTabType) {}
}
