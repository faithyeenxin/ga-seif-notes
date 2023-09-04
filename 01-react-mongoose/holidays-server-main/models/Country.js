const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    title: String,
    

})


const country = mongoose.model('country', countrySchema)

module.exports = country