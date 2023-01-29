const express = require('express');

const port = 3000;
const app = express();

const cors = require('cors');

app.use(cors({ origin: '*' }));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send({
		title: 'Static Site using an API',
		text: 'Hey, you just called an API and got data!!!',
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}...`);
});
