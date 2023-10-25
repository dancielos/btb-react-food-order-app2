import Input from '../UI/Input';

const CheckoutForm = function (props) {
	return (
		<>
			<p>Total amount: $99.99</p>
			<form className='control'>
				<Input label='Full name' />
				<Input label='E-mail address' />
				<Input label='Street' />
				<div className='one-row'>
					<Input label='Postal code' />
					<Input label='City' />
				</div>

				<div className='modal-actions'>
					<a href='#' className='text-button'>
						Close
					</a>
					<button type='submit' className='button'>
						Checkout
					</button>
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
