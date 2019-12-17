import { Action } from 'redux';
import { SidebarTab } from '../enums/SidebarTab';

export class SetActiveSidebarTabAction implements Action {
    public static readonly type = '[Sidebar] Set active tab';

    public readonly type = SetActiveSidebarTabAction.type;

    constructor(public readonly sidebarTab: SidebarTab) {}
}
