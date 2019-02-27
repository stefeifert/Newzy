const express = require('express');
const sequelize = require('sequelize');
const db = require('./models')
const app = express();
const PORT = 8080;

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
    });
  });
  