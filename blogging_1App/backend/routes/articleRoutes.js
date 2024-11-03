const express = require('express');
const router = express.Router();
const { saveDraft, publishArticle } = require('../controllers/articleController');

router.post('/articles/draft', async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const draft = await saveDraft({ title, content, category, tags, status: 'draft' });
    res.status(201).json(draft);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save draft' });
  }
});

router.post('/articles/publish', async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const article = await publishArticle({ title, content, category, tags, status: 'published' });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to publish article' });
  }
});

module.exports = router;