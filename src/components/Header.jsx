import logo from '../assets/logo.jpg';

const Header = function (props) {
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} alt='order up logo' />
				<h1>Order Up!</h1>
			</div>
			<nav>
				<a href='#' className='cart-btn'>
					Cart (n)
				</a>
			</nav>
		</header>
	);
};

export default Header;
