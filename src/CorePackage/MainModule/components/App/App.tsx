import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../common/store';
import { Sidebar } from '../../../SidebarModule';
import { Content } from '../../containers/Content';

import styles from './App.module.css';


export class App extends React.PureComponent {
    public render(): ReactNode {
        return (
            <Provider store={store}>
                <div className={styles.grid}>
                    <Sidebar />
                    <Content />
                </div>
            </Provider>
        );
    }
}
