const express = require("express");
const cors = require("cors");
const ports = require("./routes/routers.js");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const bodyParser = require("body-parser");
const env = require("dotenv");
env.config({ path: "./.env/.env" });
const port = process.env.PORT || 3400;
const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.get("/", (req, res) => {
  res.json({ success: true, status:200,message: "Comment api" });
});

app.use("/api", ports);
mongoose
  .connect(process.env.API_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`db Listening on port:http://localhost/${port}`);
    })
  )
  .catch((error) => console.log(error.message));
