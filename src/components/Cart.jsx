import { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';

const Cart = function (props) {
	const cartCtx = useContext(CartContext);

	const totalPrice = new Intl.NumberFormat('en-CA', {
		style: 'currency',
		currency: 'CAD',
	}).format(cartCtx.totalPrice);

	return (
		<>
			<ul>
				{cartCtx.items.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
				<span className='cart-total'>{totalPrice}</span>
			</ul>
		</>
	);
};

export default Cart;
