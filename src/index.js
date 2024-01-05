require('dotenv').config()
require('express-async-errors');
// Import the connectDB function from the ./db/index.js file
const connectDB = require('./db/index.js');
// Import the 'app' object from the ./app.js file
const { app } = require('./app.js');

// Set the port to the value in the environment variable PORT, or default to 8000
const port = process.env.PORT || 8000;


// Connect to the MongoDB database
connectDB()
    .then(() => {
        // Start the server and listen on the specified port
        app.listen(port, () => {
            console.log(`Server is running at port : ${port}`);
        });
    })
    .catch((err) => {
        // Handle errors in case MongoDB connection fails
        console.log("MONGO db connection failed !!! ", err);
    });
