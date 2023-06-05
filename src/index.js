const hbs = require("express-handlebars");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

const route = require("./routes");
app.use(express.static(path.join(__dirname, "public")));
//http loger
app.use(morgan("combined"));
//template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
); // định nghĩa ra hanlebars = engine() function
app.set("view engine", "hbs"); // set view engine = handlebars ở dòng trên
app.set("views", path.join(__dirname, "resources/views"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// route init
route(app);

const db = require("./config/db");
db.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
