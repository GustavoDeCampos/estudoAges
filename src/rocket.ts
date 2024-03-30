type User1 = {
    //ao colocar a interrogação no nome, faz com que ele seja opcional ao usuario, entao ele nao precisa fornecer o nome como parametro
    //caso ele nao queira, se o nome nao for opcional e algo receber o usuario sem nome, da erro
    name ?: string
    age : number
   address: address
}

type address = {
    street: string
    number: number
}

//Keyof pega todas as chaves de um objeto
type UserProps = keyof User1

function PickProperty(user: User1, property: UserProps){
    return user[property]
    
}

const user: User1 = {
    name: "Gustavo",
    age: 20,
    address: {
        street: "Rua Jorge Nunes",
        number: 640
    }

}

//typeof converte qualquer variavel do javascript para um tipo
const video ={
    title: "Aula de Typescript",
    duration: 180
}

//dessa forma ele pega o tipo do objeto video e atribui a variavel Video
type Video = typeof video
//aqui ele recebe sting e number

//mas se usar keyof typeof ele pega as chaves do objeto
type video1 = keyof typeof video
//aqui ele recebe title e duration

console.log(PickProperty(user,'age'))



// utility types/ generics

type pickPropertyReturnType = ReturnType<typeof PickProperty> //o return type busca o possivel retorno de uma função
// dentro da função returnType, o parametro (generics) é a função pickProperty, o typeof é para o typescript entender que é uma função
// por isso o PickPropertyReturType vai retornar string | number | address | undefined, pois sao os possiveis retornos da função PickProperty

type UserWthoutAddress = Omit<User1, 'address' | 'name'> //o omit serve para omitir uma propriedade de um objeto, é possivel tirar mais de uma propriedade usando o |

type UserNameAndAge = Pick<User1, 'name' | 'age'> //o pick serve para pegar apenas as propriedades desejadas de um objeto, é possivel pegar mais de uma propriedade usando o |

type UserPartial = Partial<User1> //o partial serve para tornar todas as propriedades de um objeto opcionais, ou seja, o usuario nao precisa fornecer todas as 

//------------------------------------------------------------

type DbConfig = {
    name: string
    url: string
}

const conn1 = { name: 'postgres', url: 'postgres://user:password'} as DbConfig //o as é um jeito de tipar um objeto, ele força o typescript a entender que o objeto é do tipo DbConfig
const conn2: DbConfig = { name: 'mysql', url: 'myslq://user:password'} //dessa forma ele ja entende que o objeto é do tipo DbConfig
const conn3 = { name: 'sqlite', url: 'sqlite://user:password'} satisfies DbConfig //o satisfies é um jeito de tipar um objeto, ele força o typescript a entender que o objeto é do tipo DbConfig 

//diferenças:

//as: serve para forçar uma tipagem, ou seja, mesmo que o objeto nao contemple os tipos do DbConfig, ele vai forçar o typescript a entender que o objeto é do tipo DbConfig
//isso geralmente não é bom, porque por mais que o compilador não aponte nenhum erro, o codigo vai quebrar em tempo de execução se o objeto nao tiver suas propriedades obrigatorias

//dois pontos: nesse tipo de tipagem, da erro caso o objeto nao contemple todos os tipos necessarios, o problema é que ao fazer assim
//é que o typescript vai usar apenas a tipagem definida no objeto como referencia, os 2 pontos nao permitem o typescript fazer qualquer 

//satisfies: uma uniao de todos, ele da erro caso o objeto nao contemple todos os tipos necessarios e também permite a inferencia


//------------------------------------------------------------

type Video1 = {
    title: string
    duration: number
}

const videoTest : Video1 = { 
    title: 'Aula de Typescript',
    duration: 180
}

//função generica, ou seja, ela nao é do tipo video ou do tipo usuario, ela é do tipo objeto, e o que define qual objeto ela vai ser é o objeto enviado como parametro
function PickProperty1<ObjType extends Record<string, unknown>>(obj: ObjType, property: keyof ObjType){ //para garantir que o primeiro item é um objeto, é possivel extender o ObjType para object
    return obj[property]
    
}//ou seja, agora sempre que a função for chamada, o objeto enviado pra ela precisa extender um objeto onde todas as chaves do objeto sejam strings e os valores sejam desconhecidos(porque o usuario define quais sao os valores, entao eles sao desconhecidos pra mim)

//aqui tem 2 pickproperty1, um deles tem o tipo video1 e o outro tem o tipo user1, mesmo sendo a mesma função, ela se adapta ao tipo do objeto que é enviado como parametro
PickProperty1(videoTest, 'title')
PickProperty1(user, 'age')