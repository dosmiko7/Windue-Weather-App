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

const getLeftIndex = (arr, middleEl, count = 3) => {
	const distanceFromMid = Math.floor(count / 2);
	if (middleEl - distanceFromMid <= 0) return 0;
	const left = middleEl - distanceFromMid;
	if (left + count >= arr.length) return arr.length - count - 1;
	return left;
};

export const getCurrentLeftIndex = (forecast, currentDate, count) => {
	const times = getTimes(forecast);
	const left = getLeftIndex(times, currentDate.getHours(), count);

	return left;
};

getCurrentLeftIndex.propTypes = {
	arr: PropTypes.array.isRequired,
	middleEl: PropTypes.number.isRequired,
	count: PropTypes.number,
};
