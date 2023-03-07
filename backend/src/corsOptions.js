//Restringir solicitações ao server a partir de um conjunto específico de domínios
const whitelist = ["0.0.0.0"]//definir os domínios que não têm acesso

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      }
}

module.exports = corsOptions