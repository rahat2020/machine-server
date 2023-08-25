const Product = require('../models/Product');
const router = require('express').Router()

// ADD Product
router.post('/add', async (req, res, next) => {

    try {
        const pd = await Product(req.body)
        const save = await pd.save()
        res.status(200).json('Products created')

        console.log(save)
    } catch (err) {
        next(err);
        console.log(err);
    }

})
// GET Product
router.get('/get', async (req, res, next) => {
    try {
        const articles = await Product.find()
        res.status(200).json(articles)
    } catch (err) {
        console.log(err)
        next(err)
    }
})

// GET Product BY ID
router.get('/get/:id', async (req, res, next) => {
    try {
        const articles = await Product.findById(req.params.id)
        res.status(200).json(articles)
    } catch (err) {
        console.log(err)
        next(err)   
    }
})

// DELETE product
router.delete('/delete/:id', async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('product is deleted')
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;