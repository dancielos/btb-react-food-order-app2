export const fetchAvailableMeals = async function () {
	const response = await fetch('http://localhost:3000/meals');
	const resData = await response.json();

	// console.log('fetching data?');

	if (!response.ok) throw new Error('Failed to fetch meals.');

	// console.log({ resData });

	return resData;
};

export const updateUserOrder = async function ({ items, customer }) {
	const response = await fetch('http://localhost:3000/orders', {
		method: 'POST',
		body: JSON.stringify({
			order: {
				items,
				customer,
			},
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const resData = await response.json();

	if (!response.ok) throw new Error('Failed to update orders');

	return resData.message;
};
