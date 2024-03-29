"use strict";
class Conta {
    numeroConta;
    titular;
    saldo;
    constructor(titular) {
        this.titular = titular;
        this.numeroConta = this.GerarNumeroConta();
        this.saldo = 0;
    }
    GerarNumeroConta() {
        return Math.floor(Math.random() * 1000) + 1;
    }
    deposito(valor) {
        if (valor <= 0) {
            console.log('valor invalido');
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor <= 0) {
            console.log('valor invalido');
            return;
        }
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log('saldo insuficiente');
        }
    }
    getSaldo() {
        return this.saldo;
    }
    getNumeroConta() {
        return this.numeroConta;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    info() {
        return `titular: ${this.titular}, numero da conta: ${this.numeroConta}, saldo: ${this.saldo}`;
    }
}
class ContaPf extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    info() {
        return `tipo da conta: PF, ${super.info()}, cpf: ${this.cpf}`;
    }
    deposito(valor) {
        if (valor > 5000) {
            console.log(`deposito de ${valor} acima do permitido`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 2000) {
            console.log(`saque de ${valor} acima do permitido`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    info() {
        return `tipo da conta: PJ, ${super.info()}, cnpj: ${this.cnpj}`;
    }
    deposito(valor) {
        if (valor > 250000) {
            console.log(`deposito de ${valor} acima do permitido`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 150000) {
            console.log(`saque de ${valor} acima do permitido`);
        }
        else {
            super.saque(valor);
        }
    }
}
const conta1 = new ContaPf('', '');
const conta2 = new ContaPj('', '');
conta1.setTitular('joao');
conta1.setCpf('123.456.789-00');
conta2.setTitular('empresa');
conta2.setCnpj('12.345.678/0001-00');
console.log("---------------------------------------------------");
conta1.deposito(1000);
conta1.deposito(6000);
conta1.deposito(-1000);
conta1.saque(100);
conta1.saque(2000);
conta1.saque(30000);
conta1.saque(0);
console.log(conta1.info());
console.log("---------------------------------------------------");
conta2.deposito(100000);
conta2.deposito(300000);
conta2.deposito(0);
conta2.saque(100);
conta2.saque(150000);
conta2.saque(2000000);
conta2.saque(-10000);
console.log(conta2.info());
console.log("---------------------------------------------------");
