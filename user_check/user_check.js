const express = require('express')
const router = express.Router()


const database = [{
    nome: 'matheus',
    email: 'matheus@123.com',
    pass: 123,
    token: 'asdasd'
}]


function check_user_id(req, res, next) {
    if (req.body.token) {
        if (req.body.token == "asdasd") {
            next()
        } else {
            res.status(404).json({ message: 'seção ou token expirados, tente tente novamente!' })
        }
    }
    else {
        if (req.body.nome == database[0].nome, req.body.email == database[0].email, req.body.pass == database[0].pass) {
            console.log('logando usuario')
            next()
        }
        else
            res.status(404).json({ message: 'usuario nao encontrado' })
    }

}


router.get('/', check_user_id, (req, res) => {
    res.send('tudo ok')
})

module.exports = router