import React, { ReactNode } from 'react';
import styles from '../NotesEditor/NotesEditor.module.css';

export class NotesEditor extends React.PureComponent {
    public render(): ReactNode {
        return <div className={styles.editor}></div>;
    }
}
