const oper=require('./operator') // case 1

const {add,sub}=require('./operator') // case 2



console.log(oper.add(5,6)) // case1
console.log(oper.sub(5,6)) // case 1

console.log(add(5,6)) // case2
console.log(sub(5,6)) // case 2

