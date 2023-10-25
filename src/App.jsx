import Header from './components/Header';
import Meals from './components/Meals';
import { createPortal } from 'react-dom';
import Modal from './UI/Modal';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import CartProvider from './store/CartProvider';

function App() {
	// console.log('App');
	return (
		<CartProvider>
			<Header />
			<Meals />
			{/* {createPortal(
				<Modal label='Your Cart' classes='cart' buttonText='Go to checkout'>
					<CartItems />
				</Modal>,
				document.getElementById('modal')
			)}
			{createPortal(
				<Modal label='Checkout' buttonText='Submit order'>
					<CheckoutForm />
				</Modal>,
				document.getElementById('modal')
			)} */}
		</CartProvider>
	);
}

export default App;
