export const fetchAvailableMeals = async function () {
	const response = await fetch('http://localhost:3000/meals');
	const resData = await response.json();

	// console.log('fetching data?');

	if (!response.ok) throw new Error('Failed to fetch meals.');

	// console.log({ resData });

	return resData;
};

export const updateUserOrder = async function (orders) {
	const response = await fetch('http://localhost:3000/orders', {
		method: 'PUT',
		body: JSON.stringify({ orders }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const resData = await response.json();

	if (!response.ok) throw new Error('Failed to update orders');

	return resData.message;
};
