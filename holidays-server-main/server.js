// Depencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require("morgan");
const holiday = require('./models/Holidays')
const Country = require('./models/Country')


//Configuration
const MONGO_URI = "mongodb+srv://sei38:sei38@cluster0.rid6l5a.mongodb.net/?retryWrites=true&w=majority" 
?? 'mongodb://localhost:27017/holiday'
const app = express()
const PORT = process.env.PORT ?? 3000;

mongoose.connect(MONGO_URI, {}, ()=> { console.log('connected to mongoDB')})
mongoose.connection.on("error", (err) => console.log(err.message + " is Mongod not running?"));
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
mongoose.connection.once("open", () => {console.log("connected to mongoose...");});

//Middleware
app.use(express.json())
app.use(morgan("dev"));
app.use(cors());


app.get('/',(req,res) => {
    res.send({ msg: 'test from backend'})
})

app.get('/countries/seed', async (req,res)=>{

    const countries = [
        { title: "Singapore" },
        { title: "Italy" },
        { title: "Thailand" },
      ];

    await Country.deleteMany()
    const result = await Country.insertMany(countries);

    res.json(result);

})

app.get('/countries', async (req,res)=> {
    const countries = await Country.find()
    res.send(countries)
})


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express listing on ${PORT}`);
  });
  