const app = require('express')()//instancia do node.js
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()// app é passado para todas as instancias do then do consign

.then('./api/validation.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.listen(4005, () => {
    console.log('Backend 4005 nodeLembrador executando...')
})