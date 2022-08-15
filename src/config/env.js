require('dotenv').config();

exports.DB_CREDENTIALS = {
    DB_URL: process.env.DB_URL || 'mongodb://127.0.0.1:27017',
    DB_NAME: process.env.DB_NAME || 'addressBook'
};

exports.CONST_CREDENTIALS = {
    PORT: process.env.PORT || 5151,
    BASE_URL: process.env.BASE_URL || 'http://127.0.0.1:5151',
    API_ROUTE_PREFIX: process.env.API_ROUTE_PREFIX || '/api/v1',
    AUTH_SECRET: process.env.AUTH_SECRET || 'RgUkXp2s5v8y/B?E(H+MbQe'
}