var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
    NODE_ENV: '"production"',
    DB_URL: JSON.stringify(process.env.MONGODB_URI),
})
