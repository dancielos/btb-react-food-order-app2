const Input = function (props) {
	return (
		<div className='control-row'>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				name={props.name}
				type={props.type}
				id={props.id}
				onChange={props.onChange}
				value={props.value}
				onBlur={props.onBlur}
			></input>
			{props.hasError && (
				<span>{props.hasError || `Invalid ${props.label}`}</span>
			)}
		</div>
	);
};

export default Input;
