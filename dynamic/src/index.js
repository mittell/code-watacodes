const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	const header = 'Dynamic Site';
	const text = 'This is dummy text for Dynamic Site.';
	res.render('index', { header, text });
});

app.get('/features', (req, res) => {
	const header = 'Features';
	const text = 'This is dummy text for Features.';
	res.render('features', { header, text });
});

app.get('/contact', (req, res) => {
	const header = 'Contact';
	const text = 'This is dummy text for Contact.';
	res.render('contact', { header, text });
});

app.listen(port, () => {
	console.log(`App listening on port ${port}...`);
});
