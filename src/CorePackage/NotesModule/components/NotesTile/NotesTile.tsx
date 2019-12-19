import React, { ReactNode } from 'react';
import styles from '../NotesTile/NotesTile.module.css';
import { INote } from '../../interfaces/INote';
import { classList } from '../../../MainModule/common/classList';

interface INoteTileProps {
    isActive: boolean;
    noteContent: INote;
    onActive: (noteId: string) => void;
}

export class NotesTile extends React.PureComponent<INoteTileProps> {
    public render(): ReactNode {
        const { isActive, noteContent, onActive } = this.props;

        return (
            <div
                className={classList({
                    [styles.tile]: true,
                    [styles.active]: isActive,
                })}
                onClick={() => onActive(noteContent.id)}
            >
                {noteContent.content}
            </div>
        );
    }
}
