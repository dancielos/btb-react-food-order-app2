import Header from './components/Header';
import Meals from './components/Meals';
import { createPortal } from 'react-dom';
import Modal from './UI/Modal';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import CartProvider from './store/CartProvider';
import { useState } from 'react';

function App() {
	const [openCartModal, setOpenCartModal] = useState(false);
	const [openCheckoutModal, setOpenCheckoutModal] = useState(false);

	//TODO
	//7. Validate data using onChange, onBlur, and onSubmit
	//8. save to /order backend
	//9. Optimize: for instance, the page re-evaluates when I close the modal
	const handleOpenCart = function () {
		setOpenCartModal(true);
	};

	const handleCloseCart = function () {
		setOpenCartModal(false);
	};

	const handleOpenCheckoutModal = function () {
		setOpenCartModal(false);
		setOpenCheckoutModal(true);
	};

	const handleCloseCheckoutModal = function () {
		setOpenCheckoutModal(false);
	};

	return (
		<CartProvider>
			<Header onOpenCart={handleOpenCart} />
			<Meals />
			{openCartModal &&
				createPortal(
					<Modal
						label='Your Cart'
						className='cart'
						openModal={openCartModal}
						onCloseModal={handleCloseCart}
						buttonText='Go to Checkout'
						onCtaClick={handleOpenCheckoutModal}
						modalActions={true}
					>
						<Cart />
					</Modal>,
					document.getElementById('modal')
				)}

			{openCheckoutModal &&
				createPortal(
					<Modal
						label='Checkout'
						openModal={openCheckoutModal}
						onCloseModal={handleCloseCheckoutModal}
						buttonText='Submit order'
						modalActions={false}
					>
						<CheckoutForm />
					</Modal>,
					document.getElementById('modal')
				)}
		</CartProvider>
	);
}

export default App;
