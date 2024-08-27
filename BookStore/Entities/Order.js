module.exports = class Order{
    #total
    #items
    #usuario
    constructor(items,usuario){
        items.forEach(({product, quantidade}) =>{
            if (quantidade > product.emEstoque){
                throw new Error('Quantidade insuficiente em Estoque')
            }
        })
        this.#items = items
        this.#usuario = usuario
        this.#total = items.reduce((sum, {product, quantidade}) => sum + (product.preco * quantidade), 0)
    }

    get data(){
        return{
            items : this.#items,
            user: this.#usuario,
            total: this.#total
        }
    }
}
