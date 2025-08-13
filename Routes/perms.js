const express = require('express');
const router = express.Router();



// Get all the Permission


router.get('/', (req , res)=>{
    res.send("All Permission");
});


router.post('/', (req , res)=> {
    res.send("Added a Product");
});



module.exports  = router;