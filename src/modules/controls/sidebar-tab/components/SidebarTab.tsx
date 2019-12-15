import React, { ReactNode } from 'react';
import './SidebarTab.css';

export type TabProps = React.HTMLAttributes<HTMLElement>;

export class SidebarTab extends React.PureComponent<TabProps> {
    public render(): ReactNode {
        const { children, ...restProps } = this.props;
        return (
            <div className='tab' {...restProps}>
                {children}
            </div>
        );
    }
}
