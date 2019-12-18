import { getActiveSidebarTab } from '../../SidebarModule/selectors/getActiveSidebarTab';
import { connect } from 'react-redux';
import { ContentView } from '../components/ContentView/ContentView';
import { IRootState } from '../index';

const mapStateToProps = (state: IRootState) => ({
    activeTab: getActiveSidebarTab(state),
});

export const Content = connect(mapStateToProps)(ContentView);
