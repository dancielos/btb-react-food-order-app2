const Modal = function ({ classes, label, children, buttonText }) {
	return (
		<div className={`modal ${classes || ''}`}>
			<h2>{label}</h2>
			{children}
		</div>
	);
};

export default Modal;
