var pool = require("../config/postgresqlConfig");

getProducts = async (req, res) => {
    try{
        const response = await pool.query("SELECT * FROM products");
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}

postProducts = async (req, res) => {
    try{
        const response = await pool.query("INSERT INTO products (name, price, category, description, image) VALUES ($1, $2, $3, $4, $5) RETURNING *", [req.body.name, req.body.price, req.body.category, req.body.description, req.body.image])
        res.status(201).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
// update a product in the database
updateProduct = async (req, res) => {
    try {
        const response = await pool.query("UPDATE products SET name = $1, price = $2, category = $3, category = $4 WHERE id = $5 RETURNING *", [req.body.name, req.body.price, req.body.category, req.body.path, req.params.id]);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};

// delete a product from the database
deleteProduct = async (req, res) => {
    try {
        const response = await pool.query("DELETE FROM products WHERE id = $1", [req.params.id]);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};

// get a single product from the database
getProduct = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM products WHERE id = $1", [req.params.id]);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};

module.exports = {
    getProducts,
    postProducts,
    updateProduct,
    deleteProduct,
    getProduct
}