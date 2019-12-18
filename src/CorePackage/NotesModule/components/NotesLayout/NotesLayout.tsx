import React, { ReactNode } from 'react';

import styles from './NotesLayout.module.css';

export class NotesLayout extends React.PureComponent {
    public render(): ReactNode {
        return <div className={styles.notes}></div>;
    }
}
