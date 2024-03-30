interface tributo{
    baseCalculo: number;
    CalculaTributo(taxa: number): number;
}

abstract class Conta { //classe abstrata conta
    private readonly numeroConta: number; //atributo numero da conta, que não pode ser mudado, pois é readonly
    private titular: string;
    private saldo: number;

    constructor(titular: string){
        this.titular = titular;
        this.numeroConta = this.GerarNumeroConta();
        this.saldo = 0;
    }

    private GerarNumeroConta(): number{ //função para gerar um numero de conta aleatorio
        return Math.floor(Math.random() * 1000) + 1;
    }

    protected deposito(valor: number): void{ //função para depositar dinheiro na conta
        if(valor <= 0){
            console.log('valor invalido');
            return;
        }

        this.saldo += valor;
    }

    protected saque(valor: number): void{ //função para sacar dinheiro da conta
        if(valor <= 0){
            console.log('valor invalido');
            return;
        }

        if(valor <= this.saldo){
        this.saldo -= valor;
        }else{
            console.log('saldo insuficiente');
        }
    }

    get Saldo(): number{ //função para retornar o saldo da conta
        return this.saldo;
    }

    get NumeroConta(): number{ //função para retornar o numero da conta
        return this.numeroConta;
    }

    get Titular(): string{ //função para retornar o titular da conta
        return this.titular;
    }

    set Titular(titular: string){ //função para mudar o titular da conta
        if(titular === ''){
            console.log('nome invalido');
            return;
        }
        this.titular = titular;
    }

    get info(): string{ //função para mostrar as informações da conta
        return `titular: ${this.titular}, numero da conta: ${this.numeroConta}, saldo: ${this.saldo}`;
    }
}


class ContaPf extends Conta implements tributo{ //herdando a classe conta, tudo que for implementado na classe conta, será herdado pela classe ContaPf
    baseCalculo = 10;
    private cpf: string;

    constructor(titular: string, cpf: string){ //construtor da classe ContaPf
        super(titular);
        this.cpf = cpf;
        
    }

    get Cpf(): string{ //função para retornar o cpf
        return this.cpf;
    }

    set Cpf(cpf: string){ //função para mudar o cpf
        this.cpf = cpf;
    }

    override get info(): string{ //função para mostrar as informações da conta
        return `tipo da conta: PF, ${super.info}, cpf: ${this.cpf}`;
    }

    deposito(valor: number): void { //função para depositar dinheiro na conta
        if(valor > 5000){
            console.log(`deposito de ${valor} acima do permitido`);
        } else{
            super.deposito(valor);
        }
    }

    public saque(valor: number): void{ //função para sacar dinheiro da conta
        if(valor > 2000){
            console.log(`saque de ${valor} acima do permitido`);
        } else{
            super.saque(valor);
        }
    }

    CalculaTributo(taxa: number): number{ //função para calcular o tributo
        return this.baseCalculo * taxa;
    }
}


class ContaPj extends Conta { //herdando a classe conta, tudo que for implementado na classe conta, será herdado pela classe ContaPj
    private cnpj: string;

    constructor(titular: string, cnpj: string){ //construtor da classe ContaPj
        super(titular);
        this.cnpj = cnpj;
    }

    get Cnpj(): string{ //função para retornar o cnpj
        return this.cnpj;
    }

    set Cnpj(cnpj: string){ //função para mudar o cnpj
        this.cnpj = cnpj;
    }

    override get info(): string{ //função para mostrar as informações da conta
        return `tipo da conta: PJ, ${super.info}, cnpj: ${this.cnpj}`;
    }

    deposito(valor: number): void { //função para depositar dinheiro na conta
        if(valor > 250000){
            console.log(`deposito de ${valor} acima do permitido`);
        } else{
            super.deposito(valor);
        }
    }

    public saque(valor: number): void{ //função para sacar dinheiro da conta
        if(valor > 150000){
            console.log(`saque de ${valor} acima do permitido`);
        } else{
            super.saque(valor);
        }
    }
}

const conta1 = new ContaPf('', ''); //instanciando a classe ContaPf
const conta2 = new ContaPj('', ''); //instanciando a classe ContaPj

conta1.Titular = 'joao'; //mudando o titular da conta
conta1.Cpf = '123.456.789-00'; //mudando o cpf da conta


conta2.Titular = 'empresa'; //mudando o titular da conta
conta2.Cnpj = '12.345.678/0001-00'; //mudando o cnpj da conta


console.log("---------------------------------------------------");
conta1.deposito(1000); //depositando dinheiro na conta
conta1.deposito(6000); //testando deposito acima do permitido
conta1.deposito(-1000); //testando deposito com valor negativo
conta1.saque(100); //sacando dinheiro da conta
conta1.saque(2000); //testando saque acima do permitido
conta1.saque(30000); //testando saque acima do permitido
conta1.saque(0); //testando saque com valor negativo
console.log(conta1.info); //mostrando as informações da conta
console.log("---------------------------------------------------");
conta2.deposito(100000); //depositando dinheiro na conta
conta2.deposito(300000); //testando deposito acima do permitido
conta2.deposito(0); //testando deposito com valor negativo
conta2.saque(100); //sacando dinheiro da conta
conta2.saque(150000); //testando saque acima do permitido
conta2.saque(2000000); //testando saque acima do permitido
conta2.saque(-10000); //testando saque com valor negativo
console.log(conta2.info); //mostrando as informações da conta
console.log("---------------------------------------------------");