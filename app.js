// CONFIGURAÇÕES DA APLICAÇÃO

import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import homeRouter from './src/routes/homeRoutes';

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
    this.app.use('/', homeRouter);
  }
}

// exporta o express pra ser usado em outros locais
export default new App().app;
