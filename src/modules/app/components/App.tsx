import React, { ReactNode } from 'react';
import { Content } from '../../content/components/Content';
import { Sidebar } from '../../sidebar/components/Sidebar';

import './App.css'

export class App extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className="grid">
                <Sidebar />
                <Content />
            </div>
        );
    }
}
