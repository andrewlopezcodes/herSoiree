const express = require('express');
const router = express.Router();
const herSoireesController = require('../controllers/herSoirees');

router.get('/', herSoireesController.index);
router.get('/:id', herSoireesController.show);
router.post('/', herSoireesController.create);
router.put('/:id', herSoireesController.update);
router.delete('/:id', herSoireesController.destroy);

module.exports = router
