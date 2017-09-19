const net = require("net");

const port = process.env.PORT || 3001;

const server = net.createServer({}, function (conn) {
    console.log("a connection");
    setTimeout(function () { conn.end(); }, 5000);
});

server.listen(port);
