const express = require('express');
const router = express.Router();
const inventoryUnitController = require('../controllers/inventoryUnitController');

router.get('/', inventoryUnitController.getAll);
router.get('/:id', inventoryUnitController.getById);
router.post('/', inventoryUnitController.create);
router.put('/:id', inventoryUnitController.update);
router.delete('/:id', inventoryUnitController.delete);

module.exports = router;
