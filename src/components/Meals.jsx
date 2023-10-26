import MealItem from './MealItem';
import { fetchAvailableMeals } from '../util/http';
import { useFetch } from '../hooks/useFetch';
import CartContext from '../store/cart-context';
import { useContext } from 'react';

const Meals = function (props) {
	const {
		fetchedData: availableMeals,
		isFetching,
		errorFetching,
	} = useFetch(fetchAvailableMeals, []);

	const cartCtx = useContext(CartContext);

	// console.log(cartCtx);

	return (
		<section>
			<ul id='meals'>
				{isFetching && !errorFetching && <p>Fetching meals...</p>}
				{!isFetching && errorFetching && (
					<p>{String(errorFetching?.message) || 'Failed to fetch data.'}</p>
				)}
				{!isFetching &&
					!errorFetching &&
					availableMeals.map((meal) => {
						return (
							<MealItem
								key={meal.id}
								onAddToCart={() => cartCtx.addItem(meal)}
								{...meal}
							/>
						);
					})}
			</ul>
		</section>
	);
};

export default Meals;
