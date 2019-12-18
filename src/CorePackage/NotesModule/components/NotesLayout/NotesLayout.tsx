import React, { ReactNode } from 'react';
import { NotesHeader } from '../NotesHeader/NotesHeader';
import { NotesEditor } from '../NotesEditor/NotesEditor';
import { NotesTiles } from '../NotesTiles/NotesTiles';
import { NotesFooter } from '../NotesFooter/NotesFooter';

import styles from './NotesLayout.module.css';

export class NotesLayout extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className={styles.notes}>
                <NotesHeader />
                <NotesTiles />
                <NotesEditor />
                <NotesFooter />
            </div>
        );
    }
}
