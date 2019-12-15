import React, { ReactNode } from 'react';
import './Sidebar.css';
import { SidebarTab } from '../../controls/sidebar-tab/components/SidebarTab';
import {NotesIcon} from "../../icons/notes/components/NotesIcon";

export class Sidebar extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className='sidebar'>
                <SidebarTab style={{ height: '5rem' }}>
                    <div className='tab-content'>
                        <div className='icon-container'><NotesIcon /></div>
                        <div className='text-container'>Notes</div>
                    </div>
                </SidebarTab>
            </div>
        );
    }
}
