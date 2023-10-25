const CartItem = function (props) {
	return (
		<li className='cart-item'>
			<p>Meal - 1 x $9.99</p>
			<div className='cart-item-actions'>
				<button>-</button>
				<span>1</span>
				<button>+</button>
			</div>
		</li>
	);
};

export default CartItem;
