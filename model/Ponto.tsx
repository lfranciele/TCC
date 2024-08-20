export class Ponto {
    constructor(usuarioId, tipo, dataHora) {
        this.usuarioId = usuarioId;
        this.tipo = tipo; 
        this.dataHora = dataHora;
    }

    static registrarPonto(usuarioId, tipo) {
        const ponto = new Ponto(usuarioId, tipo, new Date());
        console.log(`Ponto ${tipo} registrado para o usuário ${usuarioId} em ${ponto.dataHora}`);
        return ponto;
    }
}

Ponto.registrarPonto(1, "Entrada");
