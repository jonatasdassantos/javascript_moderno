const frutas = ['manga','goiaba','melão'];

const [item1, item2,item3]= frutas

console.log(item1);
console.log(item2);
console.log(item3);

const eletrons = {
    nome: "Fogão",
    categoria: "aletro",
    preco: 500.99
}

const {nome:nomeEletrons,categoria:categoriaEletrons,preco:precoEeletrons}= eletrons

console.log(nomeEletrons);
console.log(categoriaEletrons);
console.log(precoEeletrons);