import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    console.log(req.body.email, req.body.password);

    // verifica se foi enviado email e a senha
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas !!'],
      });
    }

    // procura o usuario na database pelo email
    const user = await User.findOne({ where: { email } });

    // retorna erro caso nao exista o usuario
    if (!user) {
      return res.status(401).json({
        errors: ['Usuario não existe !!'],
      });
    }

    // verifica se a senha é válida
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida !!'],
      });
    }

    // criação do token -> id + email + token-secreto(chave)
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION, /* Tempo em que o token vai expirar */
    });

    return res.json({ token });
  }
}

export default new TokenController();
