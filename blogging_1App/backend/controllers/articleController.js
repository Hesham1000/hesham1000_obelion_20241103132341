const { Article } = require('../models/articles'); // Updated to match the table name in the database

exports.saveDraft = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const draft = await Article.create({ title, content, category, tags, status: 'draft' });
    res.status(201).json({ message: 'Draft saved successfully', draft });
  } catch (error) {
    res.status(500).json({ message: 'Error saving draft', error: error.message });
  }
};

exports.publishArticle = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const article = await Article.create({ title, content, category, tags, status: 'published' });
    res.status(201).json({ message: 'Article published successfully', article });
  } catch (error) {
    res.status(500).json({ message: 'Error publishing article', error: error.message });
  }
};