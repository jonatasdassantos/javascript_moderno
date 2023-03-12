const sum = function sum(a,b){
    return a + b;
}

 

const arrowSum = (a , b) => a+b;

console.log(sum(5,5));
console.log(arrowSum(10,10));

const greeting = (name) => {
    if(name){
        return "olá " + name + "!" 
    }
    else{
        return "olá"
    }
}

console.log(greeting("jonatas"));
console.log(greeting());

const testeArrow = () => console.log('testou!');

testeArrow();

const user = {
    name: 'jhom',
    sayUserName(){
        var self = this
        setTimeout(function () {
            console.log(self);
            console.log('Username: '+ self.name);
        },500)
    },
    sayUserNameArrow() {
        setTimeout( () => {
            console.log(this)
            console.log('Username: '+ this.name);
        }, 700)
    },
}

user.sayUserName()
user.sayUserNameArrow()