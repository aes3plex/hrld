import React, { ReactNode } from 'react';

export class NotificationsIcon extends React.PureComponent {
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
                    d="M9 1.6875V3.375M4.5 9.5625C4.5 6.75 5.0625 3.375 9 3.375C12.9375 3.375 13.5 6.75 13.5 9.5625C13.5 12.375 15.1875 14.0625 15.1875 14.0625H2.8125C2.8125 14.0625 4.5 12.375 4.5 9.5625ZM11.25 14.0625C11.25 14.0625 11.25 16.3125 9 16.3125C6.75 16.3125 6.75 14.0625 6.75 14.0625H11.25Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }
}
