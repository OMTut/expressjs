const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(
    `Running Express Server on Port ${PORT}`
    )
);

//Get method takes 2 params
//Path and Callback function. The callback function has 2 params
//req (client sends data) and response (server handles data and returns)
app.get('/groceries', (req, res) => {
    res.send([
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
    ])
})