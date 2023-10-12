const convertDateIntoDayName = (dateString) => {
	const date = new Date(dateString);

	const options = { weekday: "long" };
	const dayName = new Intl.DateTimeFormat("en-US", options).format(date);

	return dayName;
};

export default convertDateIntoDayName;
