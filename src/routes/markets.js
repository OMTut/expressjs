const { Router } = require('express');

const router = Router();

const supermarkets = [
    {
        id: '1',
        store: 'Whole Foods',
        miles: 2.5,
    },
    {
        id: '2',
        store: 'Trader Joes',
        miles: 1.5,
    },
    {
        id: '3',
        store: 'HEB',
        miles: 0.6,
    },
    {
        id: '4',
        store: 'HEB',
        miles: 1.6,
    },
    {
        id: '5',
        store: 'Randalls',
        miles: 0.3,
    }
]

router.get('', (req, res) => {
    const { miles } = req.query;
    const parsedMiles = parseInt(miles);
    //if parsedInt returns NaN (not a number), it's an imporper numeric val
    if (!isNaN(parsedMiles)) {
        const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
        res.send(filteredStores)
    } else {
        res.send(supermarkets);
    }
});

module.exports = router;