import React, { ReactNode } from 'react';

interface ICheckboxProps {
    isActive: boolean;
}

export class CheckboxIcon extends React.PureComponent<ICheckboxProps> {
    public render(): ReactNode {
        const { isActive } = this.props;
        return (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 36 36"
                fill={isActive ? 'var(--color-active)' : 'none'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="18"
                    cy="18"
                    r="17"
                    stroke={
                        isActive
                            ? 'var(--color-active)'
                            : 'var(--color-font-minor)'
                    }
                    strokeWidth="2"
                />
                <path
                    d="M12 20.6667L16.2857 24L24 14"
                    stroke={
                        isActive
                            ? 'var(--color-font-major)'
                            : 'var(--color-font-minor)'
                    }
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }
}
