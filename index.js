const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors'); // Tambahkan baris ini

server.use(cors()); // Gunakan middleware cors
server.use(middlewares);
server.use('', router);
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running');
});
