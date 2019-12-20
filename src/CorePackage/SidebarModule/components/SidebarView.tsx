import React, { ReactNode } from 'react';
import styles from './SidebarView.module.css';
import { SidebarTab } from '../../../UIPackage/ControlsModule';
import {
    MessagesIcon,
    NotesIcon,
    NotificationsIcon,
} from '../../../UIPackage/IconsModule';
import { SidebarTabType } from '../enums/SidebarTabType';

interface ISidebarProps {
    activeTab: SidebarTabType;
    setActiveTab: (tab: SidebarTabType) => void;
}

export class SidebarView extends React.PureComponent<ISidebarProps> {
    public handleSelectTab(tab: SidebarTabType): void {
        this.props.setActiveTab(tab);
    }

    public render(): ReactNode {
        const { activeTab } = this.props;

        return (
            <div className={styles.sidebar}>
                <SidebarTab
                    className={styles.tab}
                    isActive={activeTab === SidebarTabType.NOTES}
                    onSelect={() => this.handleSelectTab(SidebarTabType.NOTES)}
                >
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}>
                            <NotesIcon />
                        </div>
                        <div className={styles.textContainer}>Notes</div>
                    </div>
                </SidebarTab>
                <SidebarTab
                    className={styles.tab}
                    isActive={activeTab === SidebarTabType.MESSAGES}
                    onSelect={() =>
                        this.handleSelectTab(SidebarTabType.MESSAGES)
                    }
                >
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}>
                            <MessagesIcon />
                        </div>
                        <div className={styles.textContainer}>Messages</div>
                    </div>
                </SidebarTab>
                <SidebarTab
                    className={styles.tab}
                    isActive={activeTab === SidebarTabType.NOTIFICATIONS}
                    onSelect={() =>
                        this.handleSelectTab(SidebarTabType.NOTIFICATIONS)
                    }
                >
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}>
                            <NotificationsIcon />
                        </div>
                        <div className={styles.textContainer}>
                            Notifications
                        </div>
                    </div>
                </SidebarTab>
            </div>
        );
    }
}
