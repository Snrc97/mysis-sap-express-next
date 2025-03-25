const express = require('express');
const router = express.Router();
const productRecipeController = require('../controllers/productRecipeController');

router.get('/', productRecipeController.getAll);
router.get('/:id', productRecipeController.getById);
router.post('/', productRecipeController.create);
router.put('/:id', productRecipeController.update);
router.delete('/:id', productRecipeController.delete);

module.exports = router;
