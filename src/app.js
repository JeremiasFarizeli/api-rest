import express from 'express'

const app = express()

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Servia', grupo: 'G'},
    {id: 4, selecao: 'Camaroes', grupo: 'G'}
]

//  retornar o objeto por id
function buscarSelecaoPorId(id){
    return selecoes.filter( selecao => selecao.id == id )
}

// pegar a posicao do elemento no array por id
function buscarIndexSelecao(id){
    return selecoes.findIndex( selecao => selecao.id == id )
}

// criar rota padrão, ou rota raiz ...
app.get('/', (req, res) => {
    res.send('Hello World ...')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})


app.post('/selecoes', (req, res) =>{
    selecoes.push(rep.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send('Seleção excluida com sucesso')
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})





//  exportar a constante app para que em outro arquivo, por exemplo no app.js, ele possa ser visto e utilizado quando importado.
export default app
