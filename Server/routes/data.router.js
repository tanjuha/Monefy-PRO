const express = require('express');
const router = express.Router();
const controller = require('../controllers/data.controller');

router.get('/', controller.getAllData);
router.patch('/', controller.update);
router.post('/', controller.create);