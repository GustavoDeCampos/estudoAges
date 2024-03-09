let numeros =[20,30,40]; //array
let numbers: Array<number>; //tipar array

numbers=[1,2,3,4,5,6,7,8,9,10]; //atribuir valores no array

numbers.push(11); //adicionar valores no final do array
numbers.unshift(0); //adicionar valores no inicio do array

numbers.pop() //remove o ultimo valor do array
numbers.shift() //remove o primeiro valor do array

let numbers_ro: ReadonlyArray<number> = numbers; //array somente leitura, não pode ser alterado
numbers_ro = [1,2,3,4,5,6,7,8,9,10]; //atribuir valores no array
//numbers_ro.push(11); //não pode adicionar valores
//numbers_ro.pop() //não pode remover valores

console.log(numbers);