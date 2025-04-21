const express = require('express');
const router = express.Router();
const demoRequestController = require('../controllers/demoRequestController');

router.get('/', demoRequestController.getAll);
router.get('/:id', demoRequestController.getById);
router.post('/', demoRequestController.create);
router.put('/:id', demoRequestController.update);
router.delete('/:id', demoRequestController.delete);

module.exports = router;
