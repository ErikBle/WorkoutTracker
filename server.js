const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, function(){
    console.log("Connected to PORT " + PORT);
});