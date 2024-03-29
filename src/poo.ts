class computador{ //classe computador
    private nome: string;
    private ram: number;
    private cpuSpeed: number;
    private ligado: boolean;
    private novoValor: number = 0;

    constructor(nome: string, ram: number, cpuSpeed: number){ //diferente de outras linguagens, o construtor nao recebe o mesmo nome da classe
        this.nome = nome;
        this.ram = ram;
        this.cpuSpeed = cpuSpeed;
        this.ligado = false;
    }

    ligar(): void{ //função ligar
        this.ligado = true;
    }

    desligar(): void{ //função desligar
        this.ligado = false;
    } 

    upgradeRam(): number{ //função para melhorar a memoria ram
        this.novoValor = this.ram * 2;
        return this.ram = this.novoValor;
    }

    info(): void{ //função para dar as especificações da maquina
        
        console.log(`nome: ${this.nome}, ram: ${this.ram}, cpuSpeed: ${this.cpuSpeed}, status: ${this.ligado ? 'ligado' : 'desligado'}`);
        console.log('---------------------------------------------------');
    }
}

//instanciação da classe computador, criando um objeto 
const computador1 = new computador('dell', 64, 10); 
const computador2 = new computador('hp', 32, 5); 
const computador3 = new computador('acer', 128, 15);

//ligando os computadores
computador1.ligar();
computador2.ligar();
computador3.ligar();

//desligando os computadores
computador1.desligar();

//melhorando a memoria ram
computador2.upgradeRam();
computador2.upgradeRam();

//mostrando as especificações dos computadores
computador1.info();
computador2.info();
computador3.info();








