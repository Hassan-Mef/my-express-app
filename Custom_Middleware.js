const express = require("express");
const app = express();

// Middleware to check authorization
function checkAuth(req, res, next) {
    if (req.headers.authorization === 'secret') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

// Protected route
app.get('/protected', checkAuth, (req, res) => {
    res.send('You are authorized!');
});

// Start the server
const PORT = 3000; // you can change this to any port you like
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
