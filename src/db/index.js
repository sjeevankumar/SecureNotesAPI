// Import the mongoose library for MongoDB interactions
const mongoose = require("mongoose");
// Import the DB_NAME constant from the "../constants.js" file
// const { DB_NAME } = require("../constants.js");

// Define a function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Use mongoose to connect to the MongoDB database using the provided URI and DB_NAME
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);

        // Log a message indicating a successful connection
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Log an error message if the connection fails and exit the process
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
};

// Export the connectDB function to make it available for use in other files
module.exports = connectDB;
