const express = require("express")
const data = require("../db")
const router = express.Router()

router.get('/api/products', (req, res) => {
    res.send(data.products)
})

module.exports = router;
