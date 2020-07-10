const path = require('path')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
let env = process.env.NODE_ENV
console.log(env);

module.exports = {
    sms: {
        "url": "http://xxxx",
        "appid": "xxxx"
    }
}
