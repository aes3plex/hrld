import React, { ReactNode } from 'react';
import { Button } from '../../../../UIPackage/ControlsModule';

import styles from './NotesHeaderView.module.css';

interface INotesHeaderProps {
    addNote: () => void;
}

export class NotesHeaderView extends React.PureComponent<INotesHeaderProps> {
    public render(): ReactNode {
        return (
            <div className={styles.header}>
                <div className={styles.overNotes}>
                    <Button
                        style={{ height: '3.5rem', width: '6.5rem' }}
                        text={'New'}
                        onClick={this.props.addNote}
                    />
                </div>
                <div />
            </div>
        );
    }
}
