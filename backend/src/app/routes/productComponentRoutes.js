const express = require('express');
const router = express.Router();
const productComponentController = require('../controllers/productComponentController');

router.get('/', productComponentController.getAll);
router.get('/:id', productComponentController.getById);
router.post('/', productComponentController.create);
router.put('/:id', productComponentController.update);
router.delete('/:id', productComponentController.delete);

module.exports = router;
