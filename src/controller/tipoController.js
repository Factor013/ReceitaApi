const database = require('../database/database')

class TipoController{
    newTipo(request, response){
        var {tipo_receita} = request.body
        database.select('tipo_receita').where("tipo_receita","=",tipo_receita).from('tipo_receita').then((data) => {
           var equipData = data[0]
            if(equipData){
                return response.status(401).send({ "message": 'Ja existe o tipo de receita cadastrado' })
            }else{
                database.insert({"tipo_receita": tipo_receita}).table('tipo_receita').then(data =>{
                    response.json({message:'Tipo de receita criado com sucesso'})
                }).catch(error => {
                    console.log(error)
                })
            }
        })
    }
    delTipo(request, response) {
        var {idtipo_receita} = request.body
        database('tipo_receita').where("idtipo_receita", '=', idtipo_receita).del().then(() => {
            response.status(200).send({ message: "Tipo de receita excluido com sucesso" })
        }).catch((error) => {
            return response.status(401).send('Nao foi possivel excluir equipamento')
        })
    }
    attTipo(request, response) {
        var { idtipo_receita, tipo_receita} = request.body
        database.select('*').where("idtipo_receita","=",idtipo_receita).from('tipo_receita').then((data) => {
            var dataTipo = data[0]
            if(dataTipo){
            database('tipo_receita').where('idtipo_receita','=', idtipo_receita).update({tipo_receita: tipo_receita}).then((data) => {
                response.status(200).send({ mensagem: "Tipo de receita editado com sucesso" })
            }).catch((error) => {
                console.log(error)
            })
            }else{
                return response.status(402).send('Esse tipo de receita nao existe')
            }
        })
    }
    listTipos(request,response){
        database.select('*').from('tipo_receita').then((data) => {
            response.status(200).send({ data })
        }).catch((error) => {
            return response.status(400).send('Nao foi possivel mostrar dados')
        })
    }
    listTipo(request,response){
        var{idtipo_receita} = request.body
        database.select('*').where("idtipo_receita","=",idtipo_receita).from('tipo_receita').then((data) => {
            response.status(200).send({ data })
        }).catch((error) => {
            return response.status(400).send('Nao foi possivel mostrar dados')
        })
    }

}
module.exports = new TipoController()