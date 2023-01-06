const crypto = require("crypto");
const { isStringObject } = require("util/types");

function create_pagament(req, res, next) {

    const { nome, preco, data, status } = req.body


    //let id = crypto.randomBytes(16).toString("hex");
    // mudar funcao id para use_check 





    if (typeof (nome) !== String & typeof (preco) !== String & typeof (data) !== String & typeof (status) !== String) {
        if (nome.length <= 100 && preco.length <= 100 && data.length <= 11 && status.length <= 7) {
            if (nome.length >= 5 && preco.length >= 0 && data.length >= 6 && status.length >= 4) {
                console.log('tudo ok')
                next()
            } else {
                return res.status(400).json({
                    Error: 'Verifique a quantidade de caracteres, por favor, verifique a documentação!'
                })
            }
        } else {
            return res.status(400).json({
                Error: 'campo mal formatado, por favor, verifique a documentação!'
            })
        }
    }
    else {
        return res.status(400).json({
            Error: 'nao autorizado'
        })
    }

}


module.exports = create_pagament;