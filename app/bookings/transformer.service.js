const transformToBookingsModel = (reservations, amenity) =>
	reservations.map((item) => ({
		reservation_id: item[0],
		user_id: item[2],
		start_time: getHoursAndMinutes(item[3], item[5]),
		duration: item[4] - item[3],
		amenity_name: amenity[0][1],
	}));

const getHoursAndMinutes = (totalMinutes, date) => {
	const newDate = new Date(parseInt(date));
	newDate.setMinutes(parseInt(totalMinutes));
	const isoDate = newDate.toISOString();
	return `${isoDate.substr(11, 5)}`;
};

module.exports = {
	transformToBookingsModel,
};
