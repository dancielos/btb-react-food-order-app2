import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalPrice: 0,
};

//items: {
//id, name, price, qty2
//}

const cartReducer = function (state, action) {
	const items = state.items;
	let totalPrice = state.totalPrice;

	if (action.type === 'ADD') {
		//TODO
		//check if action.item already exists in the cart
		const itemIndex = items.findIndex((item) => item.id === action.item.id);
		if (items.length > 0 && itemIndex !== -1) {
			items[itemIndex].quantity += 1;
		} else {
			items.push({
				id: action.item.id,
				name: action.item.name,
				price: action.item.price,
				quantity: 1,
			});
		}

		totalPrice += +action.item.price;
	}

	return {
		items: [...items],
		totalPrice,
	};
};

const CartProvider = function (props) {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const handleAddToCart = function (item) {
		dispatchCartAction({
			type: 'ADD',
			item,
		});
	};

	const handleRemoveFromCart = function (id) {
		dispatchCartAction({
			type: 'REMOVE',
			id,
		});
	};

	const cartContext = {
		items: cartState.items,
		totalPrice: cartState.totalPrice,
		addItem: handleAddToCart,
		removeItem: handleRemoveFromCart,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
