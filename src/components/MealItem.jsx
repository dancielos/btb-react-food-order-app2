const MealItem = function ({
	id,
	name,
	price,
	description,
	image,
	onAddToCart,
}) {
	const formattedPrice = new Intl.NumberFormat('en-ca', {
		style: 'currency',
		currency: 'CAD',
	}).format(price);
	// console.log(props);

	return (
		<li className='meal-item'>
			<article>
				<img src={`http://localhost:3000/${image}`} />
				<h3>{name}</h3>
				<p className='meal-item-price'>{formattedPrice}</p>
				<p className='meal-item-description'>{description}</p>
				<button className='meal-item-actions button' onClick={onAddToCart}>
					Add to Cart
				</button>
			</article>
		</li>
	);
};

export default MealItem;
