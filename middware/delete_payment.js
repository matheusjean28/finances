//deleta o item com o id correspondente no banco,
// checa o id antes de mandar a query para o banco

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

module.exports = delete_pagament;