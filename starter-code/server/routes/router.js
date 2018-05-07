const Dish = require("../models/dish");
const express      = require('express');
const router = express.Router();

router.post("/recipes", ( req, res, next ) => {
    const {name, image, description} = req.body;
    Dish.create({name, image, description})
        .then( (newDish) => {
            res.json(newDish);
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get("/recipes", (req, res, next) => {
    Dish.find()
        .then((dishes) => {
            res.json(dishes)
        })
        .catch ((err) => {
            //next(err);
            console.log("recipes router error")
            console.log(err)
        })
});

module.exports = router;