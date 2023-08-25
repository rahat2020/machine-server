const Product = require('../models/Product');
const router = require('express').Router()

// ADD Product
router.post('/add', async (req, res, next) => {

    try {
        const pd = await Product(req.body)
        const save = await pd.save()
        // res.status(200).json(save)
        res.status(200).json('Product created')

        console.log(save)
    } catch (err) {
        next(err);
        console.log(err);
    }

})

// FILTER BY GENRE AND AUTHOR NAME
router.get('/filtered', async (req, res) => {
    const { category } = req.query;
    let products;
  
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }
  
    res.json(products);
  });

// GET Product
router.get('/get', async (req, res, next) => {
    try {
        const pd = await Product.find()
        res.status(200).json(pd)
    } catch (err) {
        console.log(err)
        next(err)
    }
})
// UPDATE Product DATA
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;

        const updatedBook = await Product.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true } 
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json('Product is updated');
        console.log(updatedBook)
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
    }
});



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

// DELETE ARTICLE
router.delete('/delete/:id', async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product is deleted')
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;