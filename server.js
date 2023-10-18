const express = require('express');
const app = express();
const port = 5600;
app.listen(port, function () {
	console.log(`Backend Node Server Active on Port: ${port}`);
});
app.get('/', function (req, res) {
	console.log(msg);
	// const msg = document.getElementById('enteredMsg').value;
	res.sendFile(__dirname + '/index.html');
});
app.get('/chatbot', (req, res) => {
	res.sendFile(__dirname + '/bot.html');
});
app.get('/api', (req, res) => {
	const msg = req.headers.message;
});
