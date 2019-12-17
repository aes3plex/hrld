import React, { ReactNode } from 'react';
import styles from './Sidebar.module.css';
import { SidebarTab } from '../../../UIPackage/SidebarModule';
import { NotesIcon } from '../../../UIPackage/IconsModule';
import { SidebarTabType } from '../enums/SidebarTabType';

interface ISidebarProps {}

export class Sidebar extends React.PureComponent<ISidebarProps> {
    public handleSelectTab(tab: SidebarTabType): void {
        console.log(tab);
    }

    public render(): ReactNode {
        return (
            <div className={styles.sidebar}>
                <SidebarTab
                    className={styles.tab}
                    isActive={false}
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
                    isActive={true}
                    onSelect={() => this.handleSelectTab(SidebarTabType.EMAIL)}
                >
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}>
                            <NotesIcon />
                        </div>
                        <div className={styles.textContainer}>Email</div>
                    </div>
                </SidebarTab>
                <SidebarTab
                    className={styles.tab}
                    isActive={false}
                    onSelect={() =>
                        this.handleSelectTab(SidebarTabType.NOTIFICATIONS)
                    }
                >
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}>
                            <NotesIcon />
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
