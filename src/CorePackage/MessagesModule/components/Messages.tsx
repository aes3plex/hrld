import React, { ReactNode } from 'react';

import styles from './Messages.module.css';

export class Messages extends React.PureComponent {
    public render(): ReactNode {
        return <div className={styles.messages}></div>;
    }
}
