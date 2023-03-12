const arr = [1,2,3,4,5];
console.log(arr);

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers);

const users = [
    {name: ' Jonatas', available: true},
    {name: ' Santos', available: false},
    {name: ' Silva', available: false},
    {name: ' Yasmin', available: true},
]

const availableUsers = users.filter((user) => user.available);
const notavailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);
console.log(notavailableUsers);