const transformer = require('../transformer.service');

const reservations = [['297', '8', '74', '120', '720', '1593216000000']];
const amenity = [
	['8', 'First Trust International Multi-Asset Diversified Income Index'],
];
const result = [
	{
		reservation_id: '297',
		user_id: '74',
		start_time: '02:00',
		duration: 600,
		amenity_name:
			'First Trust International Multi-Asset Diversified Income Index',
	},
];

describe('transformToBookingsModel()', () => {
	it('should return bookings model', () => {
		expect(transformer.transformToBookingsModel(reservations, amenity)).toEqual(
			result
		);
	});
});
