const express = require('express')
const router = express.Router()


const database = [{
    nome: 'matheus',
    email: 'matheus@123.com',
    pass: 123,
    token: 'asdasd'

}]

let counts = [{
    "user1": {
        "id": 1,
        "nome": "conta de agua",
        "preco": "100",
        "data": "2022-11-26",
        "status": "true"
    }
},
{
    "id": "testedois",
    "nome": "123",
    "preco": "1654",
    "data": "2022-11-26",
    "status": "true"
},
{
    "id": "testedois",
    "nome": "123",
    "preco": "1654",
    "data": "2022-11-26",
    "status": "true"
},
{
    "id": "1",
    "nome": "123",
    "preco": "1654",
    "data": "2022-11-26",
    "status": "true"
}]

//checa se o id ou token do usuario é valido
function check_user_id(req, res, next) {
    if (req.body.token) {
        if (req.body.token == "asdasd") {
            next()
        } else {
            // res.status(400).json({ message: 'seção ou token expirados, tente tente novamente!' })
        }
    }
    else {
        if (req.body.nome == database[0].nome, req.body.email == database[0].email, req.body.pass == database[0].pass) {
            console.log('logando usuario')
            next()
        }
        else {
            // res.status(404).json({ message: 'usuario nao encontrado' })
            //função acima bloqueia o usuario de proseguir para a proxima pagina 
            // caso o token ou id sejam invelidos, desativada somente para proseguir
            //com o desenvolvimento da api -- remover o next() depois
            next()
        }
    }
}


//criar uma nova conta na lista de contas
function create_pagament(req, res, next) {
    let item = req.body;
    console.log(counts)
    console.log('este é o item', item)
    //colocar o item dentro do counts, que é a lista de contas ficcticia
    counts.push(item)
    next()
}

//deleta o item com o id igual ao 
function delete_pagament(req, res, next) {
    let item_deleted = req.body.id

    //pegar o index do e para deletar o mesmo do array
    console.log('teste foi', item_deleted)
    counts.map((e) => {
        if (e === item_deleted ){
        console.log()

    }
})
next()
}


// console.log(database[1].user)
router.get('/', check_user_id, (req, res) => {
    //depois de validado a seção do usuario, mandar os dados do mesmo
    //call para o banco de dados retornando os dados do usuario
    //usando id do mesmo

    res.json(counts)
})



router.get('/mycount', check_user_id, (req, res) => {
    //depois de validado a seção do usuario, mandar os dados do mesmo
    //call para o banco de dados retornando os dados do usuario
    //usando id do mesmo
    res.json(counts)
})


router.post('/', create_pagament, (req, res) => {
    console.log('sua conta foi criada com sucesso')
    res.json(counts)
})



router.delete('/', delete_pagament, (req, res) => {

    res.send('item deletado com sucesso ')
})

module.exports = router