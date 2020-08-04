class ParseError extends Error {
	constructor(message, error) {
		super(message);
		this.orignalError = error;
	}
}

module.exports = {
	ParseError,
};
