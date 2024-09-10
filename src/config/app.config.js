const {config} = require("dotenv")

config()

exports.appConfig = {
    PORT: parseInt(process.env.APP_PORT, 10) || 3000,
    HOST: process.env.APP_HOST
}