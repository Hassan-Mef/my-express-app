const express = require('express');
const app = express();
const fs = require('fs').promises;

const port = 3004;
const path = './products.json';

// Load products from file
async function load() {
    try {
        await fs.access(path).catch(() => fs.writeFile(path, JSON.stringify([])));

        const readData = await fs.readFile(path, "utf-8");
        return JSON.parse(readData);
    } catch (error) {
        console.log("Error", error);
        return [];
    }
}

// GET products with optional filtering
app.get('/products', async (req, res) => {
    try {
        const products = await load();

        // Extract the "category" query parameter
        const category = req.query.category;

        if (category) {
            const filteredProducts = products.filter(p => p.category === category);
            return res.json(filteredProducts);
        }

        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load products' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
