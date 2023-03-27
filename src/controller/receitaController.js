const database = require('../database/database')

class ReceitaController{
    newReceita(request,response){
        var{nome_receita,ingredientes,modo_preparo,idusuario,idtipo_receita} = request.body
        database.insert({ "nome_receita":nome_receita,
            "ingredientes": ingredientes, 
            "modo_preparo": modo_preparo, 
            "usuarios_idusuarios": idusuario, 
            "tipo_receita_idtipo_receita": idtipo_receita}).table('receitas').then((data) => {
            return response.status(200).send({ "message": 'Receita criada com sucesso' })
        }).catch(error => {
            console.log(error)
        })
    }
    delReceita(request,response){
        var{idreceitas, idusuario} = request.body
        database.select('*').from('receitas').where("idreceitas",idreceitas).then((data) => {
            var dataRec = data[0]
            if(dataRec){
                database('receitas').where("idreceitas", '=', idreceitas, "&&" , 'usuarios_idusuarios', '=', idusuario).del().then(() => {
                    response.status(200).send({ message: "Receita excluida com sucesso " })
                }).catch((error) => {
                    return response.status(401).send('Erro ao excluir a receita')
                })
            }else{
                return response.status(400).send({message:"erro ao excluir Receita"})
            }
        })
    }
    attReceita(request, response){
        var{idreceitas, nome_receita, ingredientes, modo_preparo, idtipo_receita} = request.body
        database('receitas').where('idreceitas', '=', idreceitas)
        .update({
            nome_receita: nome_receita,
            ingredientes: ingredientes,
            modo_preparo: modo_preparo,
            tipo_receita_idtipo_receita: idtipo_receita
        }).then(() => {
            response.status(200).send({ mensagem: "Receita alterada com sucesso" })
        }).catch((error) => {
            console.log(error)
        })
    }
    listReceitas(request,response){
        database.select('nome_receita','tipo_receita','ingredientes','modo_preparo','usuario').table('receitas').innerJoin("usuarios","usuarios.idusuarios","receitas.usuarios_idusuarios")
        .innerJoin("tipo_receita","tipo_receita.idtipo_receita","receitas.tipo_receita_idtipo_receita").then((data) => {
            response.status(200).send({ data })
        }).catch((error) => {
            return response.status(400).send('Nao foi possivel mostrar dados')
        })
    }
    listReceitasbyUser(request,response){
        var {usuario} = request.body
        database.select('nome_receita','tipo_receita','ingredientes','modo_preparo','usuario').table('receitas').innerJoin("usuarios","usuarios.idusuarios","receitas.usuarios_idusuarios")
        .innerJoin("tipo_receita","tipo_receita.idtipo_receita","receitas.tipo_receita_idtipo_receita").where('usuario',usuario).then((data) => {
            response.status(200).send({ data })
        }).catch((error) => {
            return response.status(400).send('Nao foi possivel mostrar dados')
        })
    }
    listReceitasbyTipo(request,response){
        var {tipo_receita} = request.body
        database.select('nome_receita','tipo_receita','ingredientes','modo_preparo','usuario').table('receitas').innerJoin("usuarios","usuarios.idusuarios","receitas.usuarios_idusuarios")
        .innerJoin("tipo_receita","tipo_receita.idtipo_receita","receitas.tipo_receita_idtipo_receita").where('tipo_receita',tipo_receita).then((data) => {
            response.status(200).send({ data })
        }).catch((error) => {
            return response.status(400).send('Nao foi possivel mostrar dados')
        })
    }
}
module.exports = new ReceitaController()