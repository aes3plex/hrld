import React, { ReactNode } from 'react';
import styles from '../NotesTile/NotesTile.module.css';
import { INote } from '../../interfaces/INote';
import { classList } from '../../../MainModule/common/classList';
import { CheckboxIcon } from '../../../../UIPackage/IconsModule';

interface INoteTileProps extends React.HTMLAttributes<HTMLElement> {
    isActive: boolean;
    note: INote;
    onActive: (noteId: string) => void;
}

export class NotesTile extends React.PureComponent<INoteTileProps> {
    public render(): ReactNode {
        const { isActive, note, onActive } = this.props;

        return (
            <div
                className={classList({
                    [styles.tile]: true,
                    [styles.activeTile]: isActive,
                })}
                onClick={() => onActive(note.id)}
                {...this.props}
            >
                <div className={styles.icon}>
                    <CheckboxIcon isActive={isActive}/>
                </div>
                <div className={styles.header}>
                    <div
                        className={classList({
                            [styles.title]: true,
                            [styles.activeTitle]: isActive,
                        })}
                    >
                        {note.title}
                    </div>
                    <div
                        className={classList({
                            [styles.date]: true,
                            [styles.activeDate]: isActive,
                        })}
                    >
                        {note.createdAt}
                    </div>
                </div>
            </div>
        );
    }
}
