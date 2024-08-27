const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(nome, descricao, altura, largura, preco, emEstoque = 0){
        super(nome, descricao, preco, emEstoque)
        this.altura = altura
        this.largura = largura
    }
}