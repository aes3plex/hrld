import React, { ReactNode } from 'react';
import styles from '../NotesTilesView/NotesTilesView.module.css';
import { NotesTile } from '../NotesTile/NotesTile';
import { INote } from '../../interfaces/INote';

interface INotesTilesProps {
    notes: INote[];
    activeNoteId: string | null;
    setActiveNote: (noteId: string) => void;
}

export class NotesTilesView extends React.PureComponent<INotesTilesProps> {
    public render(): ReactNode {
        const { notes, activeNoteId, setActiveNote } = this.props;

        const notesTiles = notes.map(note => {
            return (
                <NotesTile
                    key={note.id}
                    style={{height: '20%'}}
                    isActive={note.id === activeNoteId}
                    note={note}
                    onActive={setActiveNote}
                />
            );
        });

        return <div className={styles.tiles}>{notesTiles}</div>;
    }
}
