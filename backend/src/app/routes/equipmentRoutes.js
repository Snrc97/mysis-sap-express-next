const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

router.get('/', equipmentController.getAll);
router.get('/:id', equipmentController.getById);
router.post('/', equipmentController.create);
router.put('/:id', equipmentController.update);
router.delete('/:id', equipmentController.delete);

module.exports = router;
