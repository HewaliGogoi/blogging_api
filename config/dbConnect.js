const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(`mongodb+srv://hewali:hewali123@cluster0.lsem2.mongodb.net/blogging`)
    .then(() => console.log(`Mongoose is connected!`))
    .catch((err) => console.log(err))
};

module.exports = connect;