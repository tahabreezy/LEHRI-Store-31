const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://freeapi.gerasim.in/api/BigBasket/GetAllProducts');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
