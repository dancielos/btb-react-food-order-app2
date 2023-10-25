import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalPrice: 0,
	totalQuantity: 0,
};

const cartReducer = function (state, action) {
	const items = [...state.items];
	let totalPrice = state.totalPrice;
	let totalQuantity = state.totalQuantity;

	if (action.type === 'ADD') {
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
		totalQuantity += 1;
	} else {
		//action.type === 'REMOVE'
		//findIndex of the given id
		//if quantity > 1 : decrease quantity by one
		//else if quantity === 1 : remove item

		const itemIndex = items.findIndex((item) => item.id === action.id);

		if (itemIndex !== -1) {
			totalPrice -= items[itemIndex].price;
			totalQuantity -= 1;

			if (items[itemIndex].quantity > 1) {
				items[itemIndex].quantity -= 1;
			} else {
				items.splice(itemIndex, 1);
			}
		}
	}

	totalPrice = Number(parseFloat(totalPrice).toFixed(2));

	//Save to local storage, so when the page reloads the Cart items will still be there.
	localStorage.setItem(
		'cartContent',
		JSON.stringify({
			items: [...items],
			totalQuantity,
			totalPrice,
		})
	);

	return {
		items: [...items],
		totalQuantity,
		totalPrice,
	};
};

const CartProvider = function (props) {
	const initialState =
		JSON.parse(localStorage.getItem('cartContent')) || defaultCartState;

	// console.log(initialState);

	const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

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
		totalQuantity: cartState.totalQuantity,
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
