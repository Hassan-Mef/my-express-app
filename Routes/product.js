const express = require('express');
const router = express.Router();



// Get all the prodcuts 


router.get('/', (req , res)=>{
    res.send("All Products");
});


router.post('/', (req , res)=> {
    res.send("Added a Product");
});



module.exports  = router;