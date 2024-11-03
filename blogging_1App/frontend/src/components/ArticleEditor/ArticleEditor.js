import React, { useState } from 'react';
import axios from 'axios';
import './ArticleEditor.css';

function ArticleEditor() {
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
        tags
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to save draft');
    }
  };

  const handlePublishArticle = async () => {
    try {
      const response = await axios.post('https://blogging_1App-backend.cloud-stacks.com/api/articles/publish', {
        title,
        content,
        category,
        tags
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to publish article');
    }
  };

  return (
    <div className="article-editor">
      <header className="editor-header">
        <div className="brand-logo">Brand Logo</div>
        <nav className="navigation-tabs">
          <ul>
            <li>Home</li>
            <li>Create Article</li>
            <li>My Articles</li>
            <li>Community</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h1>User Creates Article</h1>
        <form className="article-form">
          <input
            type="text"
            className="article-title"
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="article-content"
            placeholder="Write your article here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="text"
            className="article-category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            className="article-tags"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <div className="editor-actions">
            <button type="button" onClick={handleSaveDraft}>Save Draft</button>
            <button type="button" onClick={handlePublishArticle}>Publish Article</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </main>
      <footer className="editor-footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default ArticleEditor;
