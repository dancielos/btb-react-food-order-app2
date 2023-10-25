import { createContext } from 'react';

const CartContext = createContext({
	items: [],
	totalPrice: 0,
	addItem: (item) => {},
	removeITem: (id) => {},
});

export default CartContext;
