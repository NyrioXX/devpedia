//Configura o transportador nodemailer
const nodemailer = require("nodemailer");

const transportador = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e2b89d77dc1ef7",
    pass: "********2d76",
  },
});
//Enviar email
transportador.sendMail({
  from: "meu-email@gmail.com",
  to: inscrito.email,
  subject: "Newsletter",
  html: `<p>Olá ${inscrito.nome},</p><p>${texto}</p>`,
});
//p.s: as configurações passadas no enviar email podem ser guardadas numa var e depois implementado
const emailPadrao = {
  from: "meu-email@gmail.com",
  to: inscrito.email,
  subject: "Newsletter",
  html: `<p>Olá ${inscrito.nome},</p><p>${texto}</p>`,
};
transportador.sendMail(emailPadrao);
