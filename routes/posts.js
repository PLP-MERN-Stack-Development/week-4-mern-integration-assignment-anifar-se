const express = require('express');
const {
  getAllPosts,
  getPostByIdOrSlug,
  createPost,
  updatePost,
  deletePost,
  addComment,
  searchPosts,
} = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getAllPosts);
router.get('/search', searchPosts);
router.get('/:idOrSlug', getPostByIdOrSlug);

// Protected routes
router.post('/', protect, createPost);
router.put('/:idOrSlug', protect, updatePost);
router.delete('/:idOrSlug', protect, deletePost);
router.post('/:idOrSlug/comments', protect, addComment);

module.exports = router;
