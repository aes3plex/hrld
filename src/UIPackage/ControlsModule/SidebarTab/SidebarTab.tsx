import React, { ReactNode } from 'react';
import styles from './SidebarTab.module.css';
import { classList } from '../../../CorePackage/MainModule/common/classList';

interface ISidebarTabProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    isActive: boolean;
    onSelect: () => void;
}

export class SidebarTab extends React.PureComponent<ISidebarTabProps> {
    public render(): ReactNode {
        const { children, isActive, onSelect } = this.props;
        return (
            <div
                onClick={onSelect}
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
