import express from 'express'
const app = express()

//Configuração para arquivos estátivos
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')))

//ROTAS DO SISTEMA
app.get('/', function(req, res){
    res.sendFile(__dirname+'/src/index.html')
})

app.get('/cadastrar', function (req, res){
    res.sendFile(__dirname+'/src/cadastro.html')
})

app.get('/listar', function (req, res){
    res.sendFile(__dirname+'/src/lista.html')
})

//Servidor
app.listen(3030, ()=>{
    console.log('Servidor rodando em http://localhost:3030')
})