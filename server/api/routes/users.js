const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await loadUsersCollection();
  res.send(await users.find({}).toArray());
});

async function loadUsersCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://chaim0m:tz314459090@cluster0-shard-00-00-hwhan.mongodb.net:27017,cluster0-shard-00-01-hwhan.mongodb.net:27017,cluster0-shard-00-02-hwhan.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    {
      useNewUrlParser: true
    }
  );
  return client.db('test').collection('Users');
}
module.exports = router;