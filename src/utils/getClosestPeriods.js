import PropTypes from "prop-types";

const castStringToNumber = (str) => {
	return str.slice(0, 2);
};

const getTimes = (arr) => {
	let times = [];
	arr.forEach((element) => {
		times.push(Number(castStringToNumber(element.time)));
	});

	return times;
};

const getIndexRange = (arr, middleEl, count = 3) => {
	if (middleEl <= arr[0] || count >= arr.length) return { start: 0, howMany: count };
	if (middleEl >= arr[arr.length - 1]) return { start: arr.length - count - 1, count };

	let k = 1;
	let diff = Math.abs(middleEl - arr[1]);
	for (let i = 2; i < arr.length - 1; i++) {
		if (Math.abs(middleEl - arr[i]) < diff) k = i;
	}

	const left = Math.floor(count / 2);
	return { start: k - left, howMany: k + count - 1 };
};

export const getClosestPeriods = (forecast, currentDate, count) => {
	const times = getTimes(forecast);
	const { start, howMany } = getIndexRange(times, currentDate.getHours(), count);
	const copyForecast = forecast.slice(start, howMany);
	return copyForecast;
};

getIndexRange.propTypes = {
	arr: PropTypes.array.isRequired,
	middleEl: PropTypes.number.isRequired,
	count: PropTypes.number,
};
