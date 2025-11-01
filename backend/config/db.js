const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect(`mongodb+srv://pantpriyanshu707_db_user:UpbtWpU6Urpdx0Bx@cluster0.ja2jbjd.mongodb.net/`).then(() => {
        console.log("Connected to DB")
    }).catch((err) => {
        console.log("Error connecting to DB", err);
    })
}

module.exports = connectDb;