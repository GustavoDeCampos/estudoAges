//let [aa, bb, cc, dd] = ["verde", undefined, true, 40]


const obj = {
    cor1: "verde",
    cor2: "azul",
    cor3: "amarelo",
    cor4: "vermelho" 
}

let {cor1, cor2, cor3, cor4} = obj
let [nu1, nu2, ...nu3] = [10,20,30,40,50,60,70,80,90,100]

let texto = "Curso de TypeScript"
let [...t] = texto.split(" ")
let [p1, p2, p3] = texto.split(" ")

console.log(t);
console.log(p1);
console.log(p2);
console.log(p3);

