//NULL -- UNDEFINED -- UNKNOWN

let x: String|null;//ela precisa ter um valor associado, se nao tiver o x = null da erro
x = null; //a variavel nao pode ser vazia, ela precisa de um tipo, e null é um tipo vazio, que é diferente da variavel ser vazia
console.log(x); //como a variavel pode ser null, ela nao precisa ser inicializada para ser chamada

let y: String|undefined; //com o undefined ela nao precisa ter um valor associado, pois ela ja ta sendo associada ao "valor indefinido"
console.log(y); //como ela tem um valor indefinido, ela nao precisa ser inicializada para ser chamada

let z: unknown; //o tipo unknown pode receber valores, mas ele continua sendo do tipo unknown, logo se ele receber 10 ele nao vira number
//entao uma variavel number nao pode receber como valor uma variavel unknown, mesmo que ela tenha um valor number

z=10;
let znum: number;
//znum = z; //erro, pois o tipo unknown nao pode ser atribuido ao tipo number
//uma variavel do tipo unknown só pode ser atribuida a outra variavel do unknown ou do tipo any
