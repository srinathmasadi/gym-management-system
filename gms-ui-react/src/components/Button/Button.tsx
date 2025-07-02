import clsx from 'clsx';
import * as React from 'react';
import { Button as UIButton, type ButtonProps as UIButtonProps } from 'primereact/button';

const variants: Record<string, string> = {
	primary: 'bg-blue-600 text-white',
	inverse: 'bg-white text-blue-600',
	danger: 'bg-red-600 text-white',
	'danger-inverse': 'bg-white text-red-600 border-red-600',
	'disabled-primary': 'bg-blue-400 text-white border-blue-400',
	'disabled-inverse': 'bg-white text-blue-400 border-blue-400',
	'primary-active': 'bg-blue text-white',
};

const sizes: Record<string, string> = {
	small: 'py-1 px-2 text-sm',
	medium: 'py-2 px-4 text-md',
	large: 'py-3 px-6 text-lg',
};

type ButtonProps = UIButtonProps & {
	variant?: keyof typeof variants;
	buttonSize?: keyof typeof sizes;
	loading?: boolean;
	severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
};

export const Button = React.forwardRef<UIButton, ButtonProps>(
	(
		{ className = '', variant = 'primary', buttonSize = 'small', loading = false, ...props },
		ref
	) => {
		return (
			<UIButton
				className={clsx(variants[variant], sizes[buttonSize], className)}
				loading={loading}
				ref={ref}
				severity={props.severity}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';
