const crypto = require("crypto");


function create_pagament(req, res, next) {
    
    let nome = req.body.nome;
    let preco = req.body.preco;
    let data = req.body.data;
    let status = req.body.status;
    let id = crypto.randomBytes(16).toString("hex");
    
    /* 
    adicionar validação para tamanhos dos campos
    se o tamanho e o formato do campo for valido
    adicionar o mesmo no contexto de payment para proseguir para a proxima tarefa
    */ 
   
   
   let payment = {nome, preco, data, status, id}
   console.log('este é o paymenbte',payment)
   
   //colocar o item dentro do counts, que é a lista de contas ficcticia
   counts.push(payment)
   next()
}


module.exports = create_pagament;