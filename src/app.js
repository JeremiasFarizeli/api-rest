import express from 'express'

const app = express()

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Servia', grupo: 'G'},
    {id: 4, selecao: 'Camaroes', grupo: 'G'}
]


function buscarSelecaoPorId(id){
    return selecoes.filter( selecao => selecoes.id == id )
}

// criar rota padrão, ou rota raiz ...
app.get('/', (req, res) => {
    res.send('Hello World ...')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    // let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) =>{
    selecoes.push(rep.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})






//  exportar a constante app para que em outro arquivo, por exemplo no app.js, ele possa ser visto e utilizado quando importado.
export default app
