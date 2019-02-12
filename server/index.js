const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const users = require('./api/routes/users');
app.use('/api/users', users);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}...` ));