import React, { ReactNode } from 'react';
import styles from './Sidebar.module.css';
import { SidebarTab } from '../../../UIPackage/SidebarModule';
import {NotesIcon} from "../../../UIPackage/IconsModule";


export class Sidebar extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className={styles.sidebar}>
                <SidebarTab className={styles.tab} isActive={false}>
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}><NotesIcon /></div>
                        <div className={styles.textContainer}>Notes</div>
                    </div>
                </SidebarTab>
                <SidebarTab className={styles.tab} isActive={true}>
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}><NotesIcon /></div>
                        <div className={styles.textContainer}>Notes</div>
                    </div>
                </SidebarTab>
                <SidebarTab className={styles.tab} isActive={false}>
                    <div className={styles.tabContent}>
                        <div className={styles.iconContainer}><NotesIcon /></div>
                        <div className={styles.textContainer}>Notes</div>
                    </div>
                </SidebarTab>
            </div>
        );
    }
}
