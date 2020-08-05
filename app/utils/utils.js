const csv = require('csv');
const fs = require('fs');
const path = require('path');
const delimiter = {
	delimiter: ';',
};

const dataReader = (dataPath, onData, onEnd, onError) =>
	fs
		.createReadStream(path.join(__dirname, dataPath))
		.pipe(csv.parse(delimiter))
		.on('data', onData)
		.on('end', onEnd)
		.on('error', onError);

module.exports = {
	dataReader,
};
