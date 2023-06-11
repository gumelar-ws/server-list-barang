const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Daftar origin yang diizinkan
const allowedOrigins = ['http://localhost:3000/?'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin tidak diizinkan oleh server'));
    }
  },
};

server.use(cors(corsOptions));
server.use(middlewares);
server.use('', router);

// Tambahkan header Access-Control-Allow-Origin secara manual
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigins);
  next();
});
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running');
});
