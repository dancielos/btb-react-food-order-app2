import { useContext } from 'react';
import Input from '../UI/Input';
import CartContext from '../store/cart-context';

const CheckoutForm = function (props) {
	const cartCtx = useContext(CartContext);

	const totalPrice = new Intl.NumberFormat('en-ca', {
		style: 'currency',
		currency: 'CAD',
	}).format(cartCtx.totalPrice);

	return (
		<>
			<p>Total amount: {totalPrice}</p>
			<form className='control'>
				<Input label='Full name' />
				<Input label='E-mail address' />
				<Input label='Street' />
				<div className='one-row'>
					<Input label='Postal code' />
					<Input label='City' />
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
