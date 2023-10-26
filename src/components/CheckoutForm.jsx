import { useContext, useEffect, useState } from 'react';
import Input from '../UI/Input';
import CartContext from '../store/cart-context';
import { isEmpty, isEmail } from '../util/validator';
import { updateUserOrder } from '../util/http';

const initialOrderState = {
	fullName: '',
	email: '',
	street: '',
	postalCode: '',
	city: '',
};

// const orderReducer = function(state, action) {
// 	//do something...
// }

const CheckoutForm = function (props) {
	const cartCtx = useContext(CartContext);

	const totalPrice = new Intl.NumberFormat('en-ca', {
		style: 'currency',
		currency: 'CAD',
	}).format(cartCtx.totalPrice);

	const [orderState, setOrderState] = useState(initialOrderState);
	const [didEdit, setDidEdit] = useState(
		Object.keys(initialOrderState).reduce(
			(acc, data) => ({ ...acc, [data]: false }),
			{}
		)
	);

	const validateInputs = function (orderState) {
		return Object.keys(initialOrderState).reduce((acc, data) => {
			if (data === 'email') {
				return {
					...acc,
					[data]: isEmail(orderState[data]) && !isEmpty(orderState[data]),
				};
			}
			return { ...acc, [data]: !isEmpty(orderState[data]) };
		}, {});
	};

	const [isInputValid, setIsInputValid] = useState(validateInputs(orderState));

	// console.log(isInputValid);
	useEffect(() => {
		setOrderState((prevState) => ({
			...prevState,
			numberOfItems: cartCtx.totalQuantity,
			totalPrice: cartCtx.totalPrice,
			items: cartCtx.items,
		}));
	}, []);

	useEffect(() => {
		setIsInputValid(validateInputs(orderState));
	}, [orderState, initialOrderState]);

	const handleInputChange = function (key, val) {
		setOrderState((prevState) => ({ ...prevState, [key]: val }));
		setDidEdit((prevState) => ({ ...prevState, [key]: false }));
	};

	const handleInputBlur = function (key, val) {
		//do something...
		setDidEdit((prevState) => ({ ...prevState, [key]: true }));
	};

	const handleSubmitOrder = function (e) {
		e.preventDefault();
		// console.log('what');
		// console.log(Object.values(isInputValid).some((val) => val === false));
		if (Object.values(isInputValid).some((val) => val === false)) {
			//if even if one input is invalid...
			console.log('Invalid form.');
		} else {
			updateUserOrder(orderState);
		}
		// console.log(orderState);
	};

	return (
		<>
			<p>Total amount: {totalPrice}</p>
			<form onSubmit={handleSubmitOrder} className='control'>
				<Input
					label='Full name'
					id='fullName'
					name='fullName'
					type='text'
					onChange={(e) => handleInputChange('fullName', e.target.value)}
					onBlur={(e) => handleInputBlur('fullName', e.target.value)}
					hasError={
						!isInputValid.fullName &&
						didEdit.fullName &&
						'Full name is required.'
					}
					value={orderState.fullName}
					required
				/>
				<Input
					label='E-mail address'
					id='email'
					name='email'
					type='email'
					onChange={(e) => handleInputChange('email', e.target.value)}
					onBlur={(e) => handleInputBlur('email', e.target.value)}
					hasError={!isInputValid.email && didEdit.email && 'Invalid email.'}
					value={orderState.email}
					required
				/>
				<Input
					label='Street'
					id='street'
					name='street'
					type='text'
					onChange={(e) => handleInputChange('street', e.target.value)}
					onBlur={(e) => handleInputBlur('street', e.target.value)}
					hasError={
						!isInputValid.street && didEdit.street && 'Street is required.'
					}
					value={orderState.street}
					required
				/>
				<div className='one-row'>
					<Input
						label='Postal code'
						id='postalCode'
						name='postalCode'
						type='text'
						onChange={(e) => handleInputChange('postalCode', e.target.value)}
						onBlur={(e) => handleInputBlur('postalCode', e.target.value)}
						hasError={
							!isInputValid.postalCode &&
							didEdit.postalCode &&
							'Postal code is required.'
						}
						value={orderState.postalCode}
						required
					/>
					<Input
						label='City'
						id='city'
						name='city'
						type='text'
						onChange={(e) => handleInputChange('city', e.target.value)}
						onBlur={(e) => handleInputBlur('city', e.target.value)}
						hasError={!isInputValid.city && didEdit.city && 'City is required.'}
						value={orderState.city}
						required
					/>
				</div>
				<div className='modal-actions'>
					<button type='submit' className='button'>
						Submit Order
					</button>
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
