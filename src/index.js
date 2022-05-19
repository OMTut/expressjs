const express = require('express');

const app = express();
const PORT = 3001;

const groceryList = [
    {
        item: 'milk',
        quantity: 2,
    },
    {
        item: 'cereal',
        quantity: 1,
    },
    {
        item: 'bananas',
        quantity: 1,
    },
]

/**
 * Middleware function
 * not exactly sure what it does right now but it sits between
 * req and res
 * This particular one formats the data as json
 */
app.use(express.json());
app.use(express.urlencoded()); //formats to urlencoded

app.listen(PORT, () => console.log(
    `Running Express Server on Port ${PORT}`
    )
);

/**
* Get request - allows you to get a resource from the server
* Get method takes 2 params
* Path and Callback function. The callback function has 2 params
* req (client sends data) and response (server handles data and returns)
**/
app.get('/groceries', (req, res) => {
    res.send(groceryList)
});

/**
 * Post request - creates a new resource
 * sends data from client to server
 * successful creation response is usually '201'
 */
app.post('/groceries', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.sendStatus(201);
});