import React, { ReactNode } from 'react';

export class NotesIcon extends React.PureComponent {
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
                    d="M9 3.93752V15.75M9 3.93752C9 3.93752 5.0625 0.56252 1.125 3.37502V15.75C5.0625 12.9375 9 15.75 9 15.75C9 15.75 12.9375 12.9375 16.875 15.75V3.37502C12.9375 0.56252 9 3.93752 9 3.93752Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }
}
