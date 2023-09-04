require('dotenv').config();
const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

//config
const SECRET = process.env.SECRET ?? 'KFC';

// Seed Clients
// To note that password should not be stored as a string but should be encrypted - will be taught in future lessons
router.get('/seed', async (req, res) => {
  const clients = [
    {
      username: 'petertan',
      password: '12345679',
      email: 'petertan@hotmail.com',
      fullName: 'Peter Tan',
    },
    {
      username: 'testHomeownerAccount',
      password: '12345679',
      email: 'marygoh@hotmail.com',
      fullName: 'Mary Goh',
    },
  ];

  await Client.deleteMany();
  try {
    const seedClients = await Client.create(clients);
    res.status(200).send(seedClients);
  } catch (err) {
    res.status(500).send({ err });
  }
});

//* Show all Clients
router.get('/', async (req, res) => {
  try {
    const allClients = await Client.find({});
    res.status(200).send(allClients);
  } catch (err) {
    res.status(500).send({ err });
  }
});

router.get('/findByName/:name', async (req, res) => {
  const { name } = req.params;
  const client = await Client.find({ username: name });
  if (client.length === 0) {
    res.status(200).send([]);
  } else {
    res.status(200).send(client);
  }
});

router.get('/findByEmail/:email', async (req, res) => {
  const { email } = req.params;
  const client = await Client.find({ email: email });
  if (client.length === 0) {
    res.status(200).send([]);
  } else {
    res.status(200).send(client);
  }
});

module.exports = router;
