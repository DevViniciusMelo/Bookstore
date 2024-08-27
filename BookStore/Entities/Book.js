const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, sinopse, genero, paginas, autor, descricao, preco, emEstoque = 0){
        super(`Livro: ${title}`, descricao, preco, emEstoque)
        this.title = title
        this.sinopse = sinopse
        this.genero = genero
        this.paginas = paginas
        this.autor = autor
    }
}