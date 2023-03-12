const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = [...a1,...a2];

console.log(a3);

const a4 = [0,...a1,4];

console.log(a4);

const nomecarro = {nome:'uno'}
const carmodelo = {modelo:'fiat'}
const carcor = {cor:'branco'}
const carpreco = {preco:40.00}

const carro ={...nomecarro, ...carmodelo, ...carcor, ...carpreco}
    
console.log(carro);
