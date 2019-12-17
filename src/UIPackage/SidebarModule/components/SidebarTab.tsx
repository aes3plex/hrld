import React, { ReactNode } from 'react';
import styles from './SidebarTab.module.css';
import { classList } from '../../../CorePackage/MainModule/common/classList';

interface ISidebarTabProps extends React.HTMLAttributes<HTMLElement> {
    isActive: boolean;
}

export class SidebarTab extends React.PureComponent<ISidebarTabProps> {
    public render(): ReactNode {
        const { children, isActive } = this.props;
        return (
            <div
                className={classList({
                    [styles.tab]: true,
                    [styles.active]: isActive,
                })}
            >
                {children}
            </div>
        );
    }
}
