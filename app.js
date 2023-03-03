// Variable

const express = require('express')
const app = express()
const port = 5000
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");
var nodemailer = require('nodemailer');
const { clearCache } = require('ejs');
app.use(connectLivereload())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static('public'))
liveReloadServer.watch(path.join(__dirname, 'public'));

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
});
// Get

app.get('', (req, res) => {
  res.render("index", { toptitle: "Omar Dallah Portfolio" })
});

