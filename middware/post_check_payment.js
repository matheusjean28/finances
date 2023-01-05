const crypto = require("crypto");

function create_pagament(req, res, next) {
    
    let nome = req.body.nome;
    let preco = req.body.preco;
    let data = req.body.data;
    let status = req.body.status;
    //let id = crypto.randomBytes(16).toString("hex");
    // mudar funcao id para use_check 
    let a = 1
    if (a== 1){
        return next()
    } 
    else {
        return res.status(400).json({
            Error: 'nao autorizado'
        })
    }

}


module.exports = create_pagament;