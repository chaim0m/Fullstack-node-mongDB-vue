const express = require('express');
const mongodb = require('mongodb');
const db = process.env.MONGODB_URI
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await loadUsersCollection();
  res.send(await users.find({}).toArray());
});

async function loadUsersCollection() {
  const test = db;
  debugger;
  const client = await mongodb.MongoClient.connect(db,
    { useNewUrlParser: true }
  );
  return client.db('test').collection('Users');
}
module.exports = router;
