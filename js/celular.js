const moment = require('moment');

const celular = {
  marca: 'motorola',
  modelo: 'g5',
  ano: '2019',
  color: 'azul',
  memoria: '128 gb',
  fecha: moment().format()
};

module.exports = { celular };
