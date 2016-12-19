// server/index.js
'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log("Clinton your app is on Port", PORT);
});