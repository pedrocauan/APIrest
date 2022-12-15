// CONFIGURAÇÕES DA APLICAÇÃO

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
    this.app.use('/', homeRouter);
  }
}

// exporta o express pra ser usado em outros locais
export default new App().app;
