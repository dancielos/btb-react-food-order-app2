import MealItem from './MealItem';
import fetchAvailableMeals from '../util/http';
import { useFetch } from '../hooks/useFetch';

const Meals = function (props) {
	const {
		fetchedData: availableMeals,
		isFetching,
		errorFetching,
	} = useFetch(fetchAvailableMeals, []);

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
						return <MealItem key={meal.id} {...meal} />;
					})}
			</ul>
		</section>
	);
};

export default Meals;
