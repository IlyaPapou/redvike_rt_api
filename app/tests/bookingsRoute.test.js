const request = require('supertest');
const { createServer } = require('../server');

let app;
beforeAll(() => {
	app = createServer();
});

describe('GET /bookings/:amenityId/date/:date', () => {
	it('should get bookings array by Amenity Id and Date', async () => {
		const id = 8;
		const dateMs = 1593216000000;
		const res = await request(app).get(`/api/bookings/${id}/date/${dateMs}`);

		expect(res.statusCode).toEqual(200);
		expect(Array.isArray(res.body)).toBe(true);
	});
});
