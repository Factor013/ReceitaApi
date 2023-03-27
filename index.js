const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes')

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor On')
})

app.get('/', (request, response) => {
    response.send("Fala fio...")
})