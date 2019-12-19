import React, { ReactNode } from 'react';
import { NotesHeader } from '../NotesHeader/NotesHeader';
import { NotesEditor } from '../NotesEditor/NotesEditor';
import { NotesFooter } from '../NotesFooter/NotesFooter';

import styles from './NotesLayout.module.css';
import { Notes } from '../../containers/Notes/Notes';

export class NotesLayout extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className={styles.notes}>
                <NotesHeader />
                <Notes />
                <NotesEditor />
                <NotesFooter />
            </div>
        );
    }
}
