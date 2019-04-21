const mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const db = mongoose.connection;

module.exports = db;