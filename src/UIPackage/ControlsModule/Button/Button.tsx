import * as React from 'react';
import { ReactNode } from 'react';

import './Button.module.css'

interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
    text: string;
}

export class Button extends React.PureComponent<IButtonProps> {
    public render(): ReactNode {
        return <button {...this.props}>{this.props.text}</button>;
    }
}
