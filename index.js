const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

//esse model tem uma instacia de sequelize, já define todos os schema
const model = require('./src/models/index')
const indexRoute = require('./src/routes/index')

app.use(bodyParser.urlencoded({ extended: true }))
//os arquivos estáticos
app.use(express.static('src/public'))

app.use(indexRoute)

//setando o ejs como minha view engine, as minhas views estão em /views
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

//Banco de dados sincronizado com model
model.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Rodando na porta: ' + port)
    })
})