import { useState, useEffect } from 'react';

export const useFetch = function (
	fetchFn,
	initialValue,
	errorMessage = 'Failed to fetch data. Please try again.'
) {
	// console.log('useFetch was called');
	const [fetchedData, setFetchedData] = useState(initialValue);
	const [isFetching, setIsFetching] = useState(false);
	const [errorFetching, setErrorFetching] = useState();

	useEffect(() => {
		const fetchData = async function () {
			setIsFetching(true);
			try {
				const data = await fetchFn();

				// console.log(data);
				setFetchedData(data);
			} catch (err) {
				setErrorFetching({
					message: err || errorMessage,
				});
			}
			setIsFetching(false);
		};

		fetchData();
	}, [fetchFn]);

	// console.log({ availableData });

	return {
		fetchedData,
		setFetchedData,
		isFetching,
		errorFetching,
	};
};
