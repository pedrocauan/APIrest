"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

// Array com todos os models
const models = [_Aluno2.default, _User2.default, _Foto2.default];

// Conexão com a database
const connection = new (0, _sequelize2.default)(_database2.default);

// percorre todos os models e inicia a conexão com a database
models.forEach((model) => model.init(connection));
/* caso exista a função associate ele executa ela  passando os
models dentro como referencia a função */
models.forEach((model) => model.associate && model.associate(connection.models));
