const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Assuming you have a db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4001, () => {
    console.log("JSON Server is running on http://localhost:4001");
});