const express = require('express');
const {
  getAllCategories,
  createCategory,
} = require('../controllers/categoryController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllCategories);
router.post('/', protect, createCategory);

module.exports = router;
