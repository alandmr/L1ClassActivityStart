// Import Express
const express = require('express');
const app = express();
const l1Controller = require('./controllers/lesson1')

// Define a route
app.use('/', require('./routes'));

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
