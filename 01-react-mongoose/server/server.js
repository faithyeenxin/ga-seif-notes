// DEPENDENCIES

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');

// USING IT DIRECTLY IN SERVER.JS
const Products = require('./models/Products');

// USING A CONTROLLER WHICH EXTRACTS SPECIFIC CODE TO THEIR RESPECTIVE FILES
const ClientController = require('./controller/ClientController');

// CONFIG
const app = express();
const PORT = process.env.PORT ?? 3100;
const MONGO_URI =
  process.env.MONGO_URI ?? 'mongodb://localhost:27017/day6homework';
mongoose.connect(MONGO_URI, {}, () => {
  console.log('connected to mongodb');
});

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/clients', ClientController);

app.get('/seed', async (req, res) => {
  const newProducts = [
    {
      name: 'Beans',
      description:
        'A small pile of beans. Buy more beans for a big pile of beans.',
      img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
      price: 5,
      qty: 99,
    },
    {
      name: 'Bones',
      description: "It's just a bag of bones.",
      img: 'http://bluelips.com/prod_images_large/bones1.jpg',
      price: 25,
      qty: 0,
    },
    {
      name: 'Bins',
      description: 'A stack of colorful bins for your beans and bones.',
      img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
      price: 7000,
      qty: 1,
    },
  ];

  try {
    const seedItems = await Products.create(newProducts);
    res.send(seedItems);
  } catch (err) {
    res.send(err.message);
  }
});

// INDEX ROUTE - view all products in the database by it's ID

app.get('/products', async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// SHOW ROUTE - Show a specific product in the database by its ID
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const product = await Products.findById(id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

// CREATE ROUTE - Add a new product to the database
app.post('/products', (req, res) => {
  const newProduct = req.body;
  Products.create(newProduct, (err, product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(product);
    }
  });
});

// UPDATE ROUTE - Update the details of a product (e.g., quantity) by its ID
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  console.log(newProduct);
  try {
    const product = await Products.findByIdAndUpdate(id, newProduct, {
      new: true,
    });
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE ROUTE - Delete a product in the database by its ID

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Products.findByIdAndDelete(id);
    res.status(200).send(deletedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
