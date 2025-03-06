import jsonServer from 'json-server';
import fs from 'fs';
import { join } from 'path';

const server = jsonServer.create();

// Construct an absolute path to db.json
const dbFilePath = join(process.cwd(), 'db.json');
console.log('Loading db.json from:', dbFilePath);

const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));
const router = jsonServer.router(dbData);

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
