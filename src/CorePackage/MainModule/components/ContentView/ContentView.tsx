import React, { ReactNode } from 'react';
import { SidebarTabType } from '../../../SidebarModule/enums/SidebarTabType';
import { NotesLayout } from '../../../NotesModule';
import { Messages } from '../../../MessagesModule';

interface IContentViewProps {
    activeTab: SidebarTabType;
}

export class ContentView extends React.PureComponent<IContentViewProps> {
    public render(): ReactNode {
        const { activeTab } = this.props;

        switch (activeTab) {
            case SidebarTabType.NOTES:
                return <NotesLayout />;

            case SidebarTabType.MESSAGES:
                return <Messages />;

            default:
                return <NotesLayout />;
        }
    }
}
