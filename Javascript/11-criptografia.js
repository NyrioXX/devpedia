// 4 principios da criptografia: Confidencialidade, integridade, autenticação, não-repudio
//Bibliotecas
//jsonwebtoken e bcript
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");

//exemplo de cadastro com senha criptografada
const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    //criptografa a senha antes de salvar no banco de dados
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = await pool.query(
      "insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *",
      [nome, email, senhaCriptografada]
    );

    return res.status(201).json(novoUsuario.rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
//exemplo de login
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await pool.query(
      "select * from usuarios where email = $1",
      [email]
    );

    if (usuario.rowCount < 1) {
      return res.status(404).json({ mensagem: "Email ou senha invalida" });
    }
    //comparando a senha
    const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha);

    if (!senhaValida) {
      return res.status(400).json({ mensagem: "Email ou senha invalida" });
    }
    //estabelecendo o token de login
    const token = jwt.sign({ id: usuario.rows[0].id }, senhaJwt, {
      expiresIn: "8h",
    });

    const { senha: _, ...usuarioLogado } = usuario.rows[0];

    return res.json({ usuario: usuarioLogado, token });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

//exemplo de intermediario de verificação
const jwt = require("jsonwebtoken");
const pool = require("../conexao");
const senhaJwt = require("../senhaJwt");

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ mensagem: "Não autorizado" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, senhaJwt);

    const { rows, rowCount } = await pool.query(
      "select * from usuarios where id = $1",
      [id]
    );

    if (rowCount < 1) {
      return res.status(401).json({ mensagem: "Não autorizado" });
    }

    req.usuario = rows[0];

    next();
  } catch (error) {
    return res.status(401).json({ mensagem: "Não autorizado" });
  }
};

module.exports = verificarUsuarioLogado;
