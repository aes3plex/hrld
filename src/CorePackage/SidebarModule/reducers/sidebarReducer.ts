import { SetActiveSidebarTabAction } from '../actions/SetActiveSidebarTabAction';
import { IRootState } from '../../MainModule';

type SidebarAction = SetActiveSidebarTabAction;

export function sidebarReducer(
    state: IRootState,
    action: SidebarAction,
): IRootState {
    switch (action.type) {
        case SetActiveSidebarTabAction.type: {
            return {
                ...state,
                activeSidebarTab: action.sidebarTab,
            };
        }

        default:
            return state;
    }
}
