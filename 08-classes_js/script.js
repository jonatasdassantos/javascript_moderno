class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    produtocomdesconto(desconto) {
        return this.preco * ((100 - desconto) / 100)
    }
}

const roupa = new Produto ('short jeans', 50)

console.log(roupa.nome);
console.log(roupa.produtocomdesconto(10));