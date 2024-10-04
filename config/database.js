const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/token-auth-system");
        return conn;
    } catch (err) {
        console.log("Error connecting to database");
        throw new Error(err);
    }
}