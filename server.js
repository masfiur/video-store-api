import jsonServer from 'json-server';
import fs from 'fs';

const server = jsonServer.create();

// Instead of passing 'db.json', load it into memory:
const dbData = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
const router = jsonServer.router(dbData);

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
