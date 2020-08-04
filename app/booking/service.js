const csv = require('csv');
const fs = require('fs');
const path = require('path');
const isSameDay = require('date-fns/isSameDay');
const delimiter = {
	delimiter: ';',
};

const isIdsEqual = (id1, id2) => id1 === id2;

const dataReader = (dataPath, onData, onEnd, onError) =>
	fs
		.createReadStream(path.join(__dirname, dataPath))
		.pipe(csv.parse(delimiter))
		.on('data', onData)
		.on('end', onEnd)
		.on('error', onError);

const readAmentityData = (onData, onEnd, onError) =>
	dataReader('./../../data/Amenity.csv', onData, onEnd, onError);

const readReservationsData = (onData, onEnd, onError) =>
	dataReader('./../../data/Reservations.csv', onData, onEnd, onError);

const getAmenityById = (amenityId) =>
	new Promise((resolve, reject) => {
		const results = [];
		readAmentityData(
			(data) => isIdsEqual(amenityId, data[0]) && results.push(data),
			() => resolve(results),
			() => reject(new Error("Can't get Amenity by id"))
		);
	});

const getReservationsByAmenityIdAndDate = (amenityId, date) =>
	new Promise((resolve, reject) => {
		const results = [];
		readReservationsData(
			(data) =>
				isIdsEqual(amenityId, data[1]) &&
				isSameDay(parseInt(data[5]), parseInt(date)) &&
				results.push(data),
			() => resolve(results),
			() => reject(new Error("Can't get Reservations by date"))
		);
	});

module.exports = {
	getAmenityById,
	getReservationsByAmenityIdAndDate,
};
