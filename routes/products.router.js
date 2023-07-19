const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});

router.post('/', (req,res) =>{
  const body = req.body;
  res.status(201).json(service.create(body));
});

router.patch('/:id', (req,res) =>{
  const { id }= req.params;
  const body = req.body;
  const productId = service.update(id, body)
  res.status(201).json({
    message: 'updated',
    id: productId,
  });
});

router.delete('/:id', (req,res) =>{
  const { id }= req.params;
  const productId = service.delete(id);
  res.status(201).json({
    message: 'deleted',
    id: productId,
  });
});

router.get('/:id', (req,res) =>{
  const { id }= req.params;
  res.json(service.findOne(id));
});

module.exports = router;
