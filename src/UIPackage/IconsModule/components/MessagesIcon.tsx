import React, { ReactNode } from 'react';

export class MessagesIcon extends React.PureComponent {
    public render(): ReactNode {
        return (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.125 3.375L9 9L16.875 3.375M1.125 14.625H16.875V3.375H1.125V14.625Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }
}
