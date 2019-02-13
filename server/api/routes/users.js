const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await loadUsersCollection();
  res.send(await users.find({}).toArray());
});

async function loadUsersCollection() {
  const client = await mongodb.MongoClient.connect(
    'your mongoDB connection string',
    {
      useNewUrlParser: true
    }
  );
  return client.db('test').collection('Users');
}
module.exports = router;
