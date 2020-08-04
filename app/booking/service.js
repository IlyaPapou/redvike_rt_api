const csv = require('csv');
const fs = require('fs');
const path = require('path');
const isSameDay = require('date-fns/isSameDay');
const delimiter = {
	delimiter: ';',
};

const getAmenityById = (amenityId) =>
	new Promise((resolve, reject) => {
		const results = [];
		const id = parseInt(amenityId);
		fs.createReadStream(path.join(__dirname, './../../data/Amenity.csv'))
			.pipe(csv.parse(delimiter))
			.on('data', (data) => {
				if (id === parseInt(data[0])) results.push(data);
			})
			.on('end', () => resolve(results))
			.on('error', () => reject(new Error("Can't get Reservations by date")));
	});

const getReservationsByAmenityIdAndDate = (amenityId, date) =>
	new Promise((resolve, reject) => {
		const results = [];
		const id = parseInt(amenityId);
		fs.createReadStream(path.join(__dirname, './../../data/Reservations.csv'))
			.pipe(csv.parse(delimiter))
			.on('data', (data) => {
				if (
					id === parseInt(data[1]) &&
					isSameDay(parseInt(data[5]), parseInt(date))
				)
					results.push(data);
			})
			.on('end', () => resolve(results))
			.on('error', () => {
				reject(new Error("Can't get Reservations by date"));
			});
	});

module.exports = {
	getAmenityById,
	getReservationsByAmenityIdAndDate,
};
