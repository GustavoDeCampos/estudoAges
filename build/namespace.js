"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Amarelo"] = 0] = "Amarelo";
        Cores[Cores["Preto"] = 1] = "Preto";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Azul"] = 3] = "Azul";
        Cores[Cores["Prata"] = 4] = "Prata";
    })(Cores || (Cores = {}));
    ;
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.ligar = true;
        }
        desligar() {
            this.motor.ligar = false;
        }
        get getCor() {
            return this.cor;
        }
        get getNome() {
            return this.nome;
        }
        get getLigado() {
            return (this.motor.getLigado ? "Ligado" : "Desligado");
        }
        get getPotencia() {
            return this.motor.getPotencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, motor, cor) {
            super(nome, motor, cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, motor, cor) {
            super(nome, motor, cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        get getPotencia() {
            return this.potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia + (turbo ? turbo.getPotencia : 0);
            this.ligado = false;
            this.cilindros = cilindros;
        }
        set ligar(valor) {
            this.ligado = valor;
        }
        get getLigado() {
            return this.ligado;
        }
        get getPotencia() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Ferrari", new Motores.Motor(720, 8, new Motores.Turbo(150)), 2);
const carro2 = new Veiculos.CarroPopular("Gol", new Motores.Motor(100, 4), 1);
carro1.ligar();
carro2.ligar();
console.log(`nome: ${carro1.getNome}, cor: ${carro1.getCor}, potencia: ${carro1.getPotencia}, status: ${carro1.getLigado}`);
console.log("--------------------------------------------");
console.log(`nome: ${carro2.getNome}, cor: ${carro2.getCor}, potencia: ${carro2.getPotencia}, status: ${carro2.getLigado}`);
