import React, { ReactNode } from 'react';
import styles from '../NotesTiles/NotesTiles.module.css';

export class NotesTiles extends React.PureComponent {
    public render(): ReactNode {
        return <div className={styles.tiles}></div>;
    }
}
