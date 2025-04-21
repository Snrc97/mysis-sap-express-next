const express = require('express');
const router = express.Router();
const expenditureController = require('../controllers/expenditureController');

router.get('/', expenditureController.getAll);
router.get('/:id', expenditureController.getById);
router.post('/', expenditureController.create);
router.put('/:id', expenditureController.update);
router.delete('/:id', expenditureController.delete);

module.exports = router;
