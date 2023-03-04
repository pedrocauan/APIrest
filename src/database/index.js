import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

// Array com todos os models
const models = [Aluno];

// Conexão com a database
const connection = new Sequelize(databaseConfig);

// percorre todos os models e inicia a conexão com a database
models.forEach((model) => model.init(connection));
