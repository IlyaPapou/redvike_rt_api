const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.use((req, res) => {
	return res.status(404).json({ error: 'URL not found' });
});
app.listen(3000);
