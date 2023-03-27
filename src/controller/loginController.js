const database = require('../database/database')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class LoginController {

  Login(request, response) {
    var { email, password } = request.body
    database.select('email', 'password').from('usuarios').where('email', email).then((data) => {
      const userlindo = data[0]
      if (userlindo) {
        bcrypt.compare(password, userlindo.password, (err, result) => {
          if (err) {
            console.log(err);
          } else if (result === true) {
            let token = jwt.sign({
              idusuarios: userlindo.idusuarios,
              email: userlindo.email,
              tipo: userlindo.tipo
            }, 'segreds', {
              expiresIn: '1m'
            })
              return response.status(200).send({
                mensagem: 'Bem vindo!',
                token: token
              })
          } else {
            response.json('Erro a autenticação');
          }
        });
      } else {
        response.json('Erro a autenticação')
      }
    }).catch(error => {
      response.json('Erro de autenticação')
    })
  }
}
module.exports = new LoginController()