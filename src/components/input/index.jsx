import React from "react";

const Input = (props)=>{
	const{
		label,
		type,
		inputContainerClass,
		className,
		name,
		value,
		onChange,
		hasError,
		errMsg,
		ref,
		onFocus,
		hideStrengthBar,
		strengthPass
	} = props;
	return (
		<div
			className={
				`${inputContainerClass} ${hasError ? " has-error" : ""}`
			}
		>
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<input
				ref={ref || null}
				type={type}
				className={className}
				name={name}
				value={value}
				onChange={onChange}
				onFocus={onFocus || null}
			/>
			{hasError && (
				<div className="help-block">{errMsg}</div>
			)}
			{!hideStrengthBar && name === "password" && value && (
				<div className="strengthBarContainer mt-4">
					<div className={`strengthBar ${strengthPass} br-20`}></div>
				</div>
			)}
		</div>
	);
};

export default Input;
