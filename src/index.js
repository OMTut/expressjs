// const { response } = require('express');
// const { request } = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');

const app = express();
const PORT = 3001;

/**
 * Middleware function
 * not exactly sure what it does right now but it sits between
 * req and res
 * This particular one formats the data as json
 */
app.use(express.json());
app.use(express.urlencoded()); //formats to urlencoded
app.use(cookieParser());

//call router
app.use('/api/groceries/', groceriesRoute);
app.use('/api/markets', marketsRoute);

app.listen(PORT, () => console.log(
    `Running Express Server on Port ${PORT}`
    )
);