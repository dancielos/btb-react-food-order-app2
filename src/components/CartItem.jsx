import { useContext } from 'react';
import CartContext from '../store/cart-context';

const CartItem = function ({ id, name, price, quantity }) {
	const cartCtx = useContext(CartContext);

	const handleAddItem = function (meal) {
		cartCtx.addItem(meal);
	};

	const handleRemoveItem = function (id) {
		cartCtx.removeItem(id);
	};

	return (
		<li className='cart-item'>
			<p>{`${name} - ${quantity} x ${price}`}</p>
			<div className='cart-item-actions'>
				<button onClick={() => handleRemoveItem(id)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => handleAddItem({ id, name, price, quantity })}>
					+
				</button>
			</div>
		</li>
	);
};

export default CartItem;
