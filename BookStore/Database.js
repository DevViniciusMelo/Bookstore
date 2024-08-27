module.exports = class Database{
    #storage = {
        autores: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storage[key];
    }

    saveAuthors(author){ 
        this.#storage.autores.push(author)
    }

    findBookByname(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    findPosterByname(posterName){
        return this.#storage.poster.find(p => p.name === posterName)
    }

    saveBook(book){
        const bookExists = this.findBookByname(book.nome)
        if (!bookExists){
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantidade){
        const book = this.findBookByname(bookName)
        book?.addNoEstoque(quantidade)
    }

    removeBooksFromStock(bookName, quantidade){
        const book = this.findBookByname(bookName)
        book?.removeEmEstoque(quantidade)
    }

    
    savePoster(poster){
        const posterExists = this.findPosterByname(poster.nome)
        if (!posterExists){
            this.#storage.poster.push(poster)
        }
    }

    addPosterToStock(posterName, quantidade){
        const poster = this.findBookByname(posterName)
        poster?.addNoEstoque(quantidade)
    }

    removePosterFromStock(posterName, quantidade){
        const poster = this.findBookByname(posterName)
        poster?.removeEmEstoque(quantidade)
    }

    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists){
            this.#storage.users.push(user)
        }
    }

    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage(){
        console.table(this.#storage.autores)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}