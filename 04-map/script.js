const products = [
    {name: 'Camisa', prince: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elátrica', prince: 10.99, category: 'eletro'},
    {name: 'Fogão', prince: 10.99, category: 'eletro'},
    {name: 'Calça jeans', prince: 10.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category == 'Roupas') {
        product.onSale = true
    }
})

console.log(products);