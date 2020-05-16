const express = require("express");

//Read up on morgan. Know it is required because of package.json, but not familiar with it.
const logger = require("morgan");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3000;

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//ROUTE DEFINITIONS

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

//LISTEN
app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}.`);
});
