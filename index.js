const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Daftar origin yang diizinkan
const corsOptions = {
  origin: '*', // Atur origin sesuai dengan kebutuhan Anda
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

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
