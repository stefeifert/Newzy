module.exports = function(connection, Sequelize) {
    let Article = connection.define('Article', {
      article_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      author_name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      publication_source: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      article_url: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    });

    Article.associate = function(models) {
    
      // We're saying that a Article should belong to an Author
      Article.belongsTo(models.User, {
        onDelete: 'cascade'
      });
    };
  
    return Article;
  };
  