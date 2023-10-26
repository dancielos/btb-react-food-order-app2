export const isEmpty = function (data) {
	if (data === null || data === undefined || data === '') {
		return true;
	}
	return false;
};

export const isEmail = function (data) {
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	// console.log(emailRegex);
	if (data.match(emailRegex)) return true;
	return false;
	// return '' + data.match(emailRegex);
};
