import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // path to your db.json file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);
// Use default router
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
