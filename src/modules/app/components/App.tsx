import React, { ReactNode } from 'react';

type AppProps = {};
type AppState = {};

export class App extends React.PureComponent<AppProps, AppState> {
    public render(): ReactNode {
        return (
            <div>Main layout</div>
        );
    }
}
