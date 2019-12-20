import React, { ReactNode } from 'react';
import { Button } from '../../../../UIPackage/ControlsModule';

import styles from '../NotesHeader/NotesHeader.module.css';

export class NotesHeader extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className={styles.header}>
                <div className={styles.overNotes}>
                    <Button
                        style={{ height: '3.5rem', width: '6.5rem' }}
                        text={'New'}
                    />
                </div>
                <div />
            </div>
        );
    }
}
