const service = require('./service');
const transformer = require('./transformer.service');

const getBookingsByAmenityIdAndDate = (req, res) => {
	try {
		const { amenityId, date } = req.params;
		const amenity = service.getAmenityById(amenityId);
		const reservations = service.getReservationsByAmenityIdAndDate(
			amenityId,
			date
		);
		const bookingsModel = transformer.transformToBookingsModel(
			reservations,
			amenity
		);
		res.status(200).json(bookingsModel);
	} catch (e) {
		res.status(500).send({ error: e.message });
	}
};

module.exports = {
	getBookingsByAmenityIdAndDate,
};
