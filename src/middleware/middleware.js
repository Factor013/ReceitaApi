const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token,"segreds")
        req.user = decode
        next()
    }catch(error){
        res.status(401).send({mensagem:"Falha na autenticação"})
    }
    
}