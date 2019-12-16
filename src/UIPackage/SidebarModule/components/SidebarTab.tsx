import React, { ReactNode } from 'react';
import './SidebarTab.css';

interface ISidebarTabProps extends React.HTMLAttributes<HTMLElement> {
    isActive: boolean;
}

export class SidebarTab extends React.PureComponent<ISidebarTabProps> {
    public render(): ReactNode {
        const { children, isActive } = this.props;
        return (
            <div className = { isActive ? 'active tab' : 'tab'}>
                {children}
            </div>
        );
    }
}
