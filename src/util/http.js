const fetchAvailableMeals = async function () {
	const response = await fetch('http://localhost:3000/meals');
	const resData = await response.json();

	// console.log('fetching data?');

	if (!response.ok) throw new Error('Failed to fetch meals.');

	// console.log({ resData });

	return resData;
};

export default fetchAvailableMeals;
