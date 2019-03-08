const express = require('express');
const path = require('path');
const db = require('./models')

const app = express();

const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ success: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./routes/apiRoutes.js')(app);
// require('./routes/html-routes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
    });
  });
  