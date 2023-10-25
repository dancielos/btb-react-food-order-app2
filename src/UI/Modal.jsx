const Modal = function ({
	className,
	label,
	children,
	openModal,
	buttonText,
	onCloseModal,
	onCtaClick,
}) {
	return (
		<>
			<div
				className={`backdrop ${!openModal ? 'hidden' : ''}`}
				onClick={onCloseModal}
			></div>
			<div className={`modal ${className || ''} ${!openModal ? 'hidden' : ''}`}>
				<h2>{label}</h2>
				{children}
				<div className='modal-actions'>
					<button className='text-button' onClick={onCloseModal}>
						Close
					</button>
					<button className='button' onClick={onCtaClick}>
						{buttonText}
					</button>
				</div>
			</div>
		</>
	);
};

export default Modal;
