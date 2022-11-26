const express = require('express')
const router = express.Router()


const database = [{
    nome: 'matheus',
    email: 'matheus@123.com',
    pass: 123,
    token: 'asdasd'
}, {
    user1: {
        id: 1,
        nome: "conta de agua",
        preco: "100",
        data: "2022-11-26",
        status: "true"
    },
    user2: {
        id: 2,
        nome: "conta de energia",
        preco: "92,0",
        data: "2022-11-26",
        status: "true"
    },
    user3: {
        id: 3,
        nome: "aluguel",
        preco: "70",
        data: "2022-11-26",
        status: "true"
    },
    user4: {
        id: 4,
        nome: "outros",
        preco: "13",
        data: "2022-11-26",
        status: "true"
    },
}]

function  create_pagament(req, res, next){
    let item = req.body;
    console.log('este é o item: ',item)
    database.push(item)
    console.log(database)
    next()
}


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

// console.log(database[1].user)

router.get('/', check_user_id, (req, res) => {
    //depois de validado a seção do usuario, mandar os dados do mesmo
    //call para o banco de dados retornando os dados do usuario
    //usando id do mesmo

    res.json(database[1])
})

router.post('/', create_pagament, (req,res) => {
    console.log('sua conta foi criada com sucesso')
    // res.send('well done')
    // console.log(database[1])
    res.json(database)

})

module.exports = router