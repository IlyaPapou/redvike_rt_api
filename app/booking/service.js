const isSameDay = require('date-fns/isSameDay');
const errors = require('./../utils/errors');
const dataReader = require('../utils/utils').dataReader;

const isIdsEqual = (id1, id2) => id1 === id2;

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
			(e) => reject(new errors.ParseError("Can't get Amenity by id", e))
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
			(e) => reject(new errors.ParseError("Can't get Reservations by date", e))
		);
	});

module.exports = {
	getAmenityById,
	getReservationsByAmenityIdAndDate,
};
