const Database = require("./database")
const Author = require("./Entities/Author")
const Book = require("./Entities/Book")
const Order = require("./Entities/Order")
const Poster = require("./Entities/Poster")
const User = require("./Entities/User")

module.exports = class App {
    static #database = new Database()

    createUser(nome, email, senha){
        const user = new User(nome, email,senha)
        App.#database.saveUser(user)
    }

    getUsers(){
        return App.#database.find('users')
    }

    createAuthor(name, nacionalidade, bio){
        const author = new Author(name, nacionalidade, bio)
        App.#database.saveAuthors(author)
    }

    getAuthors(){
        return App.#database.find('autores')
    }

    createBook(title,sinopse,genero,paginas,autor,descricao,preco,emEstoque){
        const book = new Book(title, sinopse,genero,paginas,autor,descricao,preco,emEstoque)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantidade){
        App.#database.addBooksToStock(bookName,quantidade)
    }

    getBooks(){
        return App.#database.find('books')
    }

    createPoster(name,descricao,altura,largura,preco,emEstoque){
        const poster = new Poster(name,descricao,altura,largura ,preco,emEstoque)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantidade){
        App.#database.addPosterToStock(posterName,quantidade)
    }

    getPosters(){
        return App.#database.find('poster')
    }

    createOrder(items, user){
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({produto, quantidade})=> {
            if (produto instanceof Book){
                App.#database.removeBooksFromStock(produto.nome, quantidade)
            } else if(produto instanceof Poster){
                App.#database.removePosterFromStock(produto.nome, quantidade)
            }
        })
    }

    getOrders(){
        return App.#database.find('orders')
    }

    showDatabase(){
        App.#database.showStorage()
    }
}