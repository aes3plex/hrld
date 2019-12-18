import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../common/store';
import { Content } from '../../ContentModule';

import styles from './App.module.css';
import { Sidebar } from '../../SidebarModule';

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
