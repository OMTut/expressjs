const { response } = require('express');
const { Router } = require('express');

const router = Router();

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
* Get request - allows you to get a resource from the server
* Get method takes 2 params
* Path and Callback function. The callback function has 2 params
* req (client sends data) and response (server handles data and returns)
**/
router.get('/', (req, res) => {
    res.cookie('visited', true, {
        maxAge: 10000,
    })
    res.send(groceryList)
});

//this is a route with a param
router.get('/:item', (req, res) => {
    console.log(req.cookies);
    const { item } = req.params;
    const groceryItem = groceryList.find((g) => g.item === item);
    res.send(groceryItem);
});

/**
 * Post request - creates a new resource
 * sends data from client to server
 * successful creation response is usually '201'
 */
router.post('/', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.sendStatus(201);
});


//when we call this endpoint, we're sending data back to the user
router.get('/shopping/cart', (req, res) => {
    const { cart } = req.session;
    console.log('Cart');
    if (!cart) {
        res.send('You have no cart session');
    } else {
        res.send(cart);
    }
})

//add items to the cart
router.post('/shopping/cart/item', (req, res) => {
    const { item, quantity } = req.body;
    const cartItem = { item, quantity };
    const { cart } = req.session;
    if (cart) {
        req.session.cart.items.push(cartItem);
    } else {
        req.session.cart = {
            items: [cartItem],
        }
    }
    res.send(201)
})

module.exports = router;