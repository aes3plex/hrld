import React, { ReactNode } from 'react';
import { NotesFooter } from '../NotesFooter/NotesFooter';
import { NotesTiles } from '../../containers/NotesTiles/NotesTiles';
import { NotesEditor } from '../../containers/NotesEditor/NotesEditor';
import { NotesHeader } from '../../containers/NotesHeader/NotesHeader';

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
