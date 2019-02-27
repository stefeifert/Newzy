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
  
    return Article;
  };
  