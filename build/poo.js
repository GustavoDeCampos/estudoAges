"use strict";
class computador {
    nome;
    ram;
    cpuSpeed;
    ligado;
    novoValor = 0;
    constructor(nome, ram, cpuSpeed) {
        this.nome = nome;
        this.ram = ram;
        this.cpuSpeed = cpuSpeed;
        this.ligado = false;
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upgradeRam() {
        this.novoValor = this.ram * 2;
        return this.ram = this.novoValor;
    }
    info() {
        console.log(`nome: ${this.nome}, ram: ${this.ram}, cpuSpeed: ${this.cpuSpeed}, status: ${this.ligado ? 'ligado' : 'desligado'}`);
        console.log('---------------------------------------------------');
    }
}
const computador1 = new computador('dell', 64, 10);
const computador2 = new computador('hp', 32, 5);
const computador3 = new computador('acer', 128, 15);
computador1.ligar();
computador2.ligar();
computador3.ligar();
computador1.desligar();
computador2.upgradeRam();
computador2.upgradeRam();
computador1.info();
computador2.info();
computador3.info();
