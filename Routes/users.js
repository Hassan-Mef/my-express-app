const express = require('express');
const router = express.Router();



// Get all the Users


router.get('/', (req , res)=>{
    res.send("All Users");
});


router.post('/', (req , res)=> {
    res.send("Added a User");
});


module.exports  = router;