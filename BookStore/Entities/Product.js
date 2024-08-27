module.exports = class Product{
    constructor(nome, descricao, preco, emEstoque = 0){
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.emEstoque = emEstoque
    }

    addNoEstoque(quantidade){
        this.emEstoque += quantidade
    }
    removeEmEstoque(quantidade){
        this.emEstoque -= quantidade
    }
}