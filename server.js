// STARTA A APLICAÇÃO
import app from './app';

const port = 5444;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`localhost:${port}`);
});
