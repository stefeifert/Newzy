const express = require('express');
const path = require('path');
const db = require('./models')

const app = express();

const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({ success: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

require('./routes/apiRoutes.js')(app);
// require('./routes/html-routes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
    });
  });
  