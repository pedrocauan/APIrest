// CONFIGURAÇÕES DA APLICAÇÃO

import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database'; // linka com a database
import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // permite objeto dentro de objeto
    this.app.use(express.urlencoded({ extended: true }));
    // permite a leitura de json no express
    this.app.use(express.json());
    // pasta de arquivos statis
    this.app.use(express.static(resolve(__dirname,'..',  'uploads')));
  }

  routes() {
    // usa a rota da home importada
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

// exporta o express pra ser usado em outros locais
export default new App().app;
