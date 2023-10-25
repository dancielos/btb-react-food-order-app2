import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import CartContext from '../store/cart-context';

const Header = function (props) {
	const cartCtx = useContext(CartContext);

	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} alt='order up logo' />
				<h1>Order Up!</h1>
			</div>
			<nav>
				<button className='cart-btn' onClick={props.onOpenCart}>
					Cart ({cartCtx.totalQuantity})
				</button>
			</nav>
		</header>
	);
};

export default Header;
