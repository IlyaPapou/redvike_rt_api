const transformToBookingsModel = (reservations, amenity) =>
	reservations.map((item) => ({
		reservation_id: item[0],
		user_id: item[2],
		start_time: item[3], // TODO: start time in HH: MM format
		duration: item[4] - item[3],
		amenity_name: amenity[0][1],
	}));

module.exports = {
	transformToBookingsModel,
};
