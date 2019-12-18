import { IRootState } from '../../MainModule';
import { getActiveSidebarTab } from '../selectors/getActiveSidebarTab';
import { connect } from 'react-redux';
import { SidebarView } from '../components/SidebarView';
import { Dispatch } from 'redux';
import { SetActiveSidebarTabAction } from '../actions/SetActiveSidebarTabAction';
import {SidebarTabType} from "../enums/SidebarTabType";

const mapStateToProps = (state: IRootState) => ({
    activeTab: getActiveSidebarTab(state),
});

const mapDispatchToProps = (dispatch: Dispatch<SetActiveSidebarTabAction>) => ({
    setActiveTab: (tab: SidebarTabType) => dispatch(new SetActiveSidebarTabAction(tab)),

});

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarView);
