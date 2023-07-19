const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products =[];
  const { size } = req.query;
  const limit = size || 10;
  for(let i = 0; i< limit ; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.post('/', (req,res) =>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req,res) =>{
  const { id }= req.params;
  res.json({
    message: 'updated',
    id: id,
  });
});

module.exports = router;
