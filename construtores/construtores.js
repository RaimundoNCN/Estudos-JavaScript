/*function montandoPC(placaMae, cpu, fonte, ram){
    return{
        placaMae,
        cpu,
        fonte,
        ram,
        ligar(){
            console.log("Teste de montagem..");
        }
    }
}*/

function Computador(placaMae, cpu, fonte, ram){
    this.placaMae = placaMae,
    this.cpu = cpu,
    this.fonte = fonte,
    this.ram = ram;
    this.ligar = function(){
        console.log("Iniciando BIOs..");
    }
}

const pcGamer = new Computador('AMD Asus',7500,650,32);
console.log(pcGamer);