import React, { ReactNode } from 'react';
import styles from '../NotesHeader/NotesHeader.module.css';

export class NotesHeader extends React.PureComponent {
    public render(): ReactNode {
        return <div className={styles.header}></div>;
    }
}
