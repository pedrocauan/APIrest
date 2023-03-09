import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// Array com todos os models
const models = [Aluno, User, Foto];

// Conexão com a database
const connection = new Sequelize(databaseConfig);

// percorre todos os models e inicia a conexão com a database
models.forEach((model) => model.init(connection));
// caso exista a função associate ele executa ela  passando os models dentro como referencia a função
models.forEach((model) => model.associate && model.associate(connection.models));
