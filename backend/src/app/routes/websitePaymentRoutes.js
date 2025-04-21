const express = require('express');
const router = express.Router();
const websitePaymentController = require('../controllers/websitePaymentController');

router.get('/', websitePaymentController.getAll);
router.get('/:id', websitePaymentController.getById);
router.post('/', websitePaymentController.create);
router.put('/:id', websitePaymentController.update);
router.delete('/:id', websitePaymentController.delete);

module.exports = router;
