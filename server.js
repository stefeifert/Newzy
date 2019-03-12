const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./Routes/users");
const apiRoutes = require("./Routes/apiRoutes");

//Initiate our app & PORT
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ success: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// DB Config
const dbURI = require("./passport-config/key").mongoURI;
// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./passport-config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use(apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(__dirname + "/client/build/index.html");
  });
}

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})