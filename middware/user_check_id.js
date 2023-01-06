
//checa se o id do usuario é valido
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

module.exports = check_user_id;