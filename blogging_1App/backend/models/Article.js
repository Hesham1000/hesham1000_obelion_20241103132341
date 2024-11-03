const { Model, Sequelize } = require('sequelize');
const sequelize = new Sequelize('blogging_1App', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class Article extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tags: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('draft', 'published'),
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Article',
      tableName: 'articles',
      timestamps: false
    });
  }
}

Article.init(sequelize);

module.exports = Article;