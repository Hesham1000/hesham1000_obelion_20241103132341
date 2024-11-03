CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(255) NOT NULL,
  tags VARCHAR(255),
  status ENUM('draft', 'published') NOT NULL
);
