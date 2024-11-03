import React, { useState } from 'react';
import './ArticlePage.css';
import axios from 'axios';

function ArticlePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  const handleSaveDraft = async () => {
    try {
      const response = await axios.post('https://blogging_1App-backend.cloud-stacks.com/api/articles/draft', {
        title,
        content,
        category,
        tags,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to save draft');
    }
  };

  const handlePublish = async () => {
    try {
      const response = await axios.post('https://blogging_1App-backend.cloud-stacks.com/api/articles/publish', {
        title,
        content,
        category,
        tags,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to publish article');
    }
  };

  return (
    <div className="article-page">
      <header className="header">
        <div className="logo">Brand Logo</div>
        <nav className="navigation-tabs">
          <a href="/">Home</a>
          <a href="/create">Create Article</a>
          <a href="/my-articles">My Articles</a>
          <a href="/community">Community</a>
        </nav>
      </header>
      <main className="content-area">
        <h1>User Creates Article</h1>
        <form className="article-form">
          <input
            type="text"
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />
          <textarea
            placeholder="Write your article here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="content-input"
          ></textarea>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-input"
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="tags-input"
          />
          <div className="action-buttons">
            <button type="button" onClick={handleSaveDraft} className="save-draft-btn">
              Save Draft
            </button>
            <button type="button" onClick={handlePublish} className="publish-btn">
              Publish Article
            </button>
          </div>
        </form>
        {message && <p className="response-message">{message}</p>}
      </main>
      <footer className="footer">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </footer>
    </div>
  );
}

export default ArticlePage;
