export class Relatorio {
    constructor(usuarioId, registros) {
        this.usuarioId = usuarioId;
        this.registros = registros; 
    }

    gerarRelatorio() {
        let relatorio = `Relatório do usuário ${this.usuarioId}\n`;
        relatorio += this.registros.map(r => `${r.tipo} - ${r.dataHora}`).join("\n");
        return relatorio;
    }
}


const registros = [
    new Ponto(1, "Entrada", new Date()),
    new Ponto(1, "Saída", new Date())
];
const relatorio = new Relatorio(1, registros);
console.log(relatorio.gerarRelatorio());
