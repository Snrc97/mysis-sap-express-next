const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

router.get('/', currencyController.getAll);
router.get('/:id', currencyController.getById);
router.post('/', currencyController.create);
router.put('/:id', currencyController.update);
router.delete('/:id', currencyController.delete);

module.exports = router;
