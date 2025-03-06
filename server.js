const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Use default middlewares (CORS, logging, etc.)
server.use(middlewares);
server.use(router);

// Listen on the given port
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
