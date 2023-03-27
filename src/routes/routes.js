const connection = require('../database/database')
const express = require('express')
const LoginController = require('../controller/loginController')
const UserController = require('../controller/userController')
const TipoController = require('../controller/tipoController')
const ReceitaController = require('../controller/receitaController')

const auth = require('../middleware/middleware')


const router = express.Router()

router.post('/login', LoginController.Login)

router.post('/newuser', UserController.newUser)
router.put('/attsen', auth, UserController.attUserPass)
router.put('/attuser', auth, UserController.attUser)

router.post('/newtipo', auth, TipoController.newTipo)
router.put('/atttipo', auth, TipoController.attTipo)
router.delete('/deltipo', auth, TipoController.delTipo)
router.get('/listtipo', auth, TipoController.listTipo)
router.get('/listtipos', auth, TipoController.listTipos)

router.post('/newreceita', auth, ReceitaController.newReceita)
router.delete('/delreceita', auth, ReceitaController.delReceita)
router.put('/attreceita', auth, ReceitaController.attReceita)
router.get('/listreceitas', ReceitaController.listReceitas)
router.get('/listreceitasbyuser', ReceitaController.listReceitasbyUser)
router.get('/listreceitasbytipo', ReceitaController.listReceitasbyTipo)


module.exports = router