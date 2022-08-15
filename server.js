// Global Imports
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Local Imports
const { CONST_CREDENTIALS } = require('./src/config/env');
const { connectDB } = require('./src/database/db');

const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const port = CONST_CREDENTIALS.PORT;
app.listen(port, () => {
    console.log(chalk.blueBright(`Server up and running on port ${port}`));
    connectDB();
});