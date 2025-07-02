import React from 'react';
import clsx from 'clsx';
import { InputText as UIInputText, type InputTextProps as UIInputTextProps } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
const variants = {
	editable: '',
	disabled: 'border-none p-0',
	clickable: 'border-none px-0',
	readonly: 'enabled:hover:border-gray-300 enabled:focus:shadow-none',
};

const errorTypes = {
	none: '',
	error: 'p-invalid',
	warning: 'border-amber-400 enabled:hover:border-amber-400',
};

type InputTextProps = UIInputTextProps & {
	label?: string;
	value?: string | number;
	showToolTip?: boolean;
	readOnly?: boolean;
	tooltipcontent?: string;
	disabled?: boolean;
	inputClassName?: string;
	errorType?: keyof typeof errorTypes;
	errorMessage?: string;
	inputSize?: 'sm' | 'md' | 'lg';
	variant?: keyof typeof variants;
};

const sizes = {
	sm: 'p-inputtext-sm',
	md: 'p-inputtext-md',
	lg: 'p-inputtext-lg',
};

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
	(
		{
			className = '',
			label = '',
			required = false,
			showToolTip = false,
			readOnly = false,
			errorType = 'none',
			errorMessage = '',
			disabled = false,
			inputClassName,
			inputSize = 'md',
			variant = 'editable',
			value = '',
			...props
		},
		ref
	) => {
		return (
			<div className={clsx('flex flex-col w-full inputtext-wrapper', className, props.name)}>
				<div className="flex justify-between">
					{label && (
						<label className="flex items-center">
							{label}
							{required && <span className="text-red-500">*</span>}
							{errorType === 'warning' && (
								<span className="pi pi-exclamation-triangle text-amber-600 text-xl ml-2 warningText">
									<Tooltip target={`.${props.name} .warningText`} content={errorMessage} />
								</span>
							)}
						</label>
					)}
					{showToolTip && props.tooltipcontent && (
						<i className="pi pi-info-circle custom-tool-tip !right-48">
							<Tooltip
								target={`.${props.name} .custom-tool-tip`}
								content={props.tooltipcontent}
								data-testid={'custom-tool-tip' + props.name}
							/>
						</i>
					)}
				</div>
				<div className="w-full p-input-icon-right flex h-full">
					<UIInputText
						className={clsx(
							'w-full',
							inputClassName,
							variants[variant as keyof typeof variants],
							sizes[inputSize as keyof typeof sizes],
							'text-ellipsis',
							errorTypes[errorType as keyof typeof errorTypes]
						)}
						value={value}
						{...props}
						ref={ref}
						readOnly={readOnly}
						disabled={disabled}
						autoComplete="off"
						aria-autocomplete="none"
					/>
				</div>
				<div className="flex items-center gap-4">
					{errorType === 'error' && <p className="text-red-500">{errorMessage}</p>}
				</div>
			</div>
		);
	}
);
InputText.displayName = 'InputText';
