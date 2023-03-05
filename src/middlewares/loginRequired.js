import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  // se o token nao for enviado nos headers da requisição ele retorna erro
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login Required'],
    });
  }
  // tira palavra chave Bearer que vem junto com o token
  const [, token] = authorization.split(' ');
  console.log(token);
  try {
    // compara o token com o secret token pra pegar os dados da requisição
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;
    // coloca id e email na requisição
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
