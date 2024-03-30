namespace Veiculos{

        enum Cores{"Amarelo", "Preto", "Vermelho", "Azul", "Prata"};
        abstract class Carro{
        private nome: string;
        private motor: Motores.Motor;
        private cor: string;
    
        constructor(nome: string, motor: Motores.Motor, cor: Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }

        public ligar(){
            this.motor.ligar = true;
        }

        public desligar(){
            this.motor.ligar = false;
        }

        get getCor(){
            return this.cor;
        }

        get getNome(){
            return this.nome;
        }

        get getLigado(){
            return (this.motor.getLigado ? "Ligado" : "Desligado")
        }

        get getPotencia(){
            return this.motor.getPotencia;
        }
    }

    export class CarroEsportivo extends Carro{
        constructor(nome: string, motor: Motores.Motor, cor: Cores){
            super(nome, motor, cor);
        }
    }

    export class CarroPopular extends Carro{
        constructor(nome: string, motor: Motores.Motor, cor: Cores){
            super(nome, motor, cor);
        }
    }
}

namespace Motores{

    export class Turbo{
        private potencia: number;
    
        constructor(potencia: number){
            this.potencia = potencia;
        }
        get getPotencia(){
            return this.potencia;
        }
    }
    
    export class Motor{
        private ligado: boolean;
        private cilindros: number;
        private potencia: number;
    
        constructor(potencia: number, cilindros: number, turbo?: Turbo){
            this.potencia = potencia + (turbo ? turbo.getPotencia : 0);
            this.ligado = false;
            this.cilindros = cilindros;
        }

        set ligar(valor: boolean){
            this.ligado = valor;
        }

        get getLigado(){
            return this.ligado;
        }

        get getPotencia(){
            return this.potencia;
        }
    }
}

const carro1 = new Veiculos.CarroEsportivo("Ferrari", new Motores.Motor(720, 8, new Motores.Turbo(150)), 2);
const carro2 = new Veiculos.CarroPopular("Gol", new Motores.Motor(100, 4), 1);

carro1.ligar();
carro2.ligar();

console.log(`nome: ${carro1.getNome}, cor: ${carro1.getCor}, potencia: ${carro1.getPotencia}, status: ${carro1.getLigado}`);
console.log("--------------------------------------------");

console.log(`nome: ${carro2.getNome}, cor: ${carro2.getCor}, potencia: ${carro2.getPotencia}, status: ${carro2.getLigado}`);