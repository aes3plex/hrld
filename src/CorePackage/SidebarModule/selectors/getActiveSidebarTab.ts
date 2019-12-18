import { IRootState } from '../../MainModule';

export const getActiveSidebarTab = (state: IRootState) =>
    state.activeSidebarTab;
