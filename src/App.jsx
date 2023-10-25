import Header from './components/Header';
import Meals from './components/Meals';
import { createPortal } from 'react-dom';
import Modal from './UI/Modal';
import CartItems from './components/CartItems';
import CheckoutForm from './components/CheckoutForm';

function App() {
	// console.log('App');
	return (
		<>
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
		</>
	);
}

export default App;
