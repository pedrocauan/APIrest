import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

// Array com todos os models
const models = [Aluno, User];

// Conexão com a database
const connection = new Sequelize(databaseConfig);

// percorre todos os models e inicia a conexão com a database
models.forEach((model) => model.init(connection));
