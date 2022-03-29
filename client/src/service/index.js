const axios = require("axios");

// get data from http://localhost:3000/products
const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    console.log(response);
    return response.data;
}

module.exports = getProducts()