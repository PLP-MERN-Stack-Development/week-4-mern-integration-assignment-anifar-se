const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const query = category ? { category } : {};
    const posts = await Post.find(query)
      .populate('author category')
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostByIdOrSlug = async (req, res, next) => {
  try {
    const key = req.params.idOrSlug;
    const post = await Post.findOne({ $or: [{ _id: key }, { slug: key }] }).populate('author category comments.user');
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const newPost = new Post({ ...req.body, author: req.user._id });
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.idOrSlug, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.idOrSlug);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.addComment = async (req, res, next) => {
  try {
    const { content } = req.body;
    const post = await Post.findById(req.params.idOrSlug);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    await post.addComment(req.user._id, content);
    res.status(201).json(post.comments[post.comments.length - 1]);
  } catch (err) {
    next(err);
  }
};

exports.searchPosts = async (req, res, next) => {
  try {
    const { q } = req.query;
    const results = await Post.find({
      $or: [
        { title: new RegExp(q, 'i') },
        { content: new RegExp(q, 'i') },
        { excerpt: new RegExp(q, 'i') },
        { tags: { $in: [new RegExp(q, 'i')] } },
      ]
    }).populate('category author');
    res.json(results);
  } catch (err) {
    next(err);
  }
};
