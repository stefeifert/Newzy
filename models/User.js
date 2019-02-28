module.exports = function (connection, Sequelize) {
    const User = connection.define('User', {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    User.associate = function (models) {

        // Associating User with Articles
        User.hasMany(models.Article, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return User;
};
