import CartItem from './CartItem';

const Cart = function (props) {
	return (
		<>
			<ul>
				<CartItem />
				<CartItem />
				<CartItem />
				<span className='cart-total'>$99.99</span>
			</ul>
			<div className='modal-actions'>
				<a href='#' className='text-button'>
					Close
				</a>
				<a href='#' className='button'>
					Go to checkout
				</a>
			</div>
		</>
	);
};

export default Cart;
