const path = require("path");
const express = require("express");
const app = express();
// const axios = require('axios')
const publicPath = path.join(__dirname, "../build");
const port = process.env.PORT || 3000;
console.log(publicPath)
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "/index.html"));
});

app.get("/test", (req, res) => {
  res.send("haha");
});

// axios.get('https://api.themoviedb.org/3/movie/550?api_key=8a4a67f63953a2afa86c2fb2a94f6f1e')
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.log(error);
// });

app.listen(port, () => {
  console.log("Server is up!");
});
