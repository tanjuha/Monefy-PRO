const express = require('express');
const router = express.Router();
const controller = require('../controllers/cost.controller');

router.get('/', controller.getAllCost);
router.get('/:id', controller.getCostById);
router.delete('/:id', controller.remove);
router.post('/', controller.create);
router.patch('/', controller.update);

module.exports = router;  
