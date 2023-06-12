const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Daftar origin yang diizinkan

server.use(cors(corsOptions));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
server.use(middlewares);
server.use('', router);

server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running');
});
