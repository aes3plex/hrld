import React, { ReactNode } from 'react';
import styles from '../NotesFooter/NotesFooter.module.css';

export class NotesFooter extends React.PureComponent {
    public render(): ReactNode {
        return <div className={styles.footer}></div>;
    }
}
