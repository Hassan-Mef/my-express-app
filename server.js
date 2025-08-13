const express = require('express');
const app = express();

app.use(express.json());

// Route Organization 
const productRoute = require('./Routes/product');
const userRoute = require("./Routes/users");
const permsRoute = require("./Routes/perms");


app.use("/product", productRoute);
app.use("/users", userRoute);
app.use("/perms", permsRoute);


const port = 3000;

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`) ;
})