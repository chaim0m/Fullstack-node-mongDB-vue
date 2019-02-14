const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const users = require('./api/routes/users');
app.use('/api/users', users);
//Handle production
if(process.env.NODE_ENV === 'production'){
    // Static folder
    app.use(express.static(__dirname + '/public/'))

    //Handle SPA
    app.get(/.*/), (req,res) => res.sendFile(__dirname + '/public/index.html')
}


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}...` ));