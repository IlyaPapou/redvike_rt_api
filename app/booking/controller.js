const service = require('./service');
const transformer = require('./transformer.service');

const getBookingsByAmenityIdAndDate = async (req, res) => {
	try {
		const { amenityId, date } = req.params;
		const [amenity, reservations] = await Promise.all([
			service.getAmenityById(amenityId),
			service.getReservationsByAmenityIdAndDate(amenityId, date),
		]);
		const bookingsModel =
			reservations.length && amenity.length
				? transformer.transformToBookingsModel(reservations, amenity)
				: [];
		res.status(200).json(bookingsModel);
	} catch (e) {
		res.status(500).send({ error: e.message });
	}
};

module.exports = {
	getBookingsByAmenityIdAndDate,
};
