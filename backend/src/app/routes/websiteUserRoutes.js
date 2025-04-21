const express = require('express');
const router = express.Router();
const websiteUserController = require('../controllers/websiteUserController');

router.get('/', websiteUserController.getAll);
router.get('/:id', websiteUserController.getById);
router.post('/', websiteUserController.create);
router.put('/:id', websiteUserController.update);
router.delete('/:id', websiteUserController.delete);

module.exports = router;
