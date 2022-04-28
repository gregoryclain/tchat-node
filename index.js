const app = require("express")();
const server = require("http").createServer(app);
const socket = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public.html`);
});
