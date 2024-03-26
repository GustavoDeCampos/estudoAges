function Logar(user: string, pass: string): void {
    console.log(`user: ${user}, pass: ${pass}`)
}

//uma função quando é criada, vai pra memoria mas não é executada, ela só é executada quando é chamada

Logar("Gustavo", "123")

function Soma2(n1: number, n2: number): number {
    let r = n1 + n2
    return r
}

const r = Soma2(10, 20)
let s_res:string = Soma2(22, 34).toString()

console.log(r)
console.log(s_res)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function soma(n1: number=0, n2: number=9):number{ //é possivel definir um valor padrão para os parametros, caso não seja passado nenhum valor
    let r = n1 + n2
    return r
}

console.log(soma(10))

function novoUser(user: string, pass: string, nome?: string): void{ //colocando a interrogação, o parametro se torna opcional
    let dados = {user, pass, nome}
    console.log(dados)
}

novoUser("br", "123", "Bruno") //caso eu nao coloque um nome, ele vai retornar undefined