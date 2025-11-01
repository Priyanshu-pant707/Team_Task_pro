const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect(`your url`).then(() => {
        console.log("Connected to DB")
    }).catch((err) => {
        console.log("Error connecting to DB", err);
    })
}

module.exports = connectDb;