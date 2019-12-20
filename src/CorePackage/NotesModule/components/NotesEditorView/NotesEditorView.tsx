import React, { ReactNode } from 'react';
import styles from '../NotesEditorView/NotesEditorView.module.css';
import { INote } from '../../interfaces/INote';
import { classList } from '../../../MainModule/common/classList';

interface INotesEditorProps {
    activeNote: INote | undefined;
}

export class NotesEditorView extends React.PureComponent<INotesEditorProps> {
    public render(): ReactNode {
        const { activeNote } = this.props;

        return activeNote ? (
            <div className={styles.editor}>
                <div className={styles.header}>
                    <div className={styles.title}>{activeNote.title}</div>
                    <div className={styles.date}>{activeNote.createdAt}</div>
                </div>
                <div className={styles.content}>{activeNote.content}</div>
            </div>
        ) : (
            <div
                className={classList({
                    [styles.editor]: true,
                    [styles.empty]: true,
                })}
            >
                Choose a note...
            </div>
        );
    }
}
