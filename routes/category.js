const Category = require('../models/Category');
const router = require('express').Router()

// ADD Category
router.post('/add', async (req, res, next) => {

    try {
        const pd = await Category(req.body)
        const save = await pd.save()
        // res.status(200).json(save)
        res.status(200).json('Category created')

        console.log(save)
    } catch (err) {
        next(err);
        console.log(err);
    }

})

// GET Category
router.get('/get', async (req, res, next) => {
    try {
        const pd = await Category.find()
        res.status(200).json(pd)
    } catch (err) {
        console.log(err)
        next(err)
    }
})



// GET Category BY ID
router.get('/get/:id', async (req, res, next) => {
    try {
        const articles = await Category.findById(req.params.id)
        res.status(200).json(articles)
    } catch (err) {
        console.log(err)
        next(err)
    }
})

// DELETE ARTICLE
router.delete('/delete/:id', async (req, res, next) => {
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json('Category is deleted')
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;