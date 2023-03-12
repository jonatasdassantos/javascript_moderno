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

class Novosprodutos extends Produto{
    constructor(nome, preco,cor){
        super(nome,preco)
        this.cor = cor
    }

    multcolor() {
        console.log('As cores são:')
        this.cor.forEach(color => {
           console.log(color); 
        });
    }
}

const hat = new Novosprodutos('chapéu', 39.99, ['azul', 'amarelo', 'vermelho'])

console.log(hat.nome);
console.log(hat.produtocomdesconto(30));
hat.multcolor()