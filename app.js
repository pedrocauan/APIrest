// CONFIGURAÇÕES DA APLICAÇÃO

import dotenv from 'dotenv';

dotenv.config();

import './src/database'; // linka com a database
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    // usa a rota da home importada
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
  }
}

// exporta o express pra ser usado em outros locais
export default new App().app;
