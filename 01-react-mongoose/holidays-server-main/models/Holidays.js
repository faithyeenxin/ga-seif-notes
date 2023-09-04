const mongoose = require('mongoose')

const holidaySchema = new mongoose.Schema({

})


const holiday = mongoose.model('holiday', holidaySchema)

module.exports = holiday