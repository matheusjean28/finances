const crypto = require("crypto");
const express = require('express')
const router = express.Router()
const create_pagament =  require('../middware/post_check_payment')
const check_user_id = require('../middware/user_check_id')
const delete_pagament = require('../middware/delete_payment')

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
}]


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


router.post('/create', create_pagament, (req, res) => {
    /*responder com o ultimo pagamento adicionado */
    let data = req.body
    res.json(data)
})



router.delete('/', delete_pagament, (req, res) => {

    res.send('item deletado com sucesso ')
})

module.exports = router