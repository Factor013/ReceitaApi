const database = require('../database/database')
const bcrypt = require('bcryptjs');

class UserController {

    newUser(request, response) {
        var {password, email } = request.body
        var hash = bcrypt.hashSync(password, 10);
        database.select('email', 'password').from('usuarios').where('email', email).then((data) => {
            const userData = data[0]
            if (userData) {
                return response.status(401).send({ "message": 'Ja existe um usuario com esse email' })
            } else {
                database.insert({ "usuario": "USER", "password": hash, "email": email}).table("usuarios").then(data => {
                    return response.status(200).send({ "message": 'Usuario Criado com sucesso' })
                }).catch(error => {
                    console.log(error)
                })
            }
        })
    }
    attUser(request,response){
        var{idusuarios, usuario} = request.body
        database.select('usuario', 'password').from('usuarios').where('usuario', usuario).then((data) => {
            var dataUser = data[0]
            if(dataUser){
                return response.status(401).send({message:'ja existe um usuario com esse nome'})
            }else{
            database('usuarios').where('idusuarios', '=', idusuarios)
            .update({
                usuario: usuario,
            }).then((data) => {
                if(data === 1){
                return response.status(200).send({ mensagem: "Usuario alterado com sucesso" })
                }else{
                    return response.status(400).send({ mensagem: "Erro ao editar usuario" })
                }
            }).catch((error) => {
                console.log(error)
            })
            }
        })
    }
    attUserPass(request, response) {
        var { idusuarios, password} = request.body
        var hash = bcrypt.hashSync(password, 10);
        database('usuarios').where('idusuarios', '=', idusuarios)
            .update({
                password: hash,
            }).then(() => {
                return response.status(200).send({ mensagem: "Senha alterada com sucesso" })
            }).catch((error) => {
                console.log(error)
            })
    }
}
module.exports = new UserController()