class Sistema {
    constructor() {
        this.usuarios = [];
        this.pontos = [];
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    registrarPonto(usuarioId, tipo) {
        const ponto = Ponto.registrarPonto(usuarioId, tipo);
        this.pontos.push(ponto);
    }

    gerarRelatorio(usuarioId) {
        const registrosUsuario = this.pontos.filter(p => p.usuarioId === usuarioId);
        const relatorio = new Relatorio(usuarioId, registrosUsuario);
        return relatorio.gerarRelatorio();
    }
}

const sistema = new Sistema();
const usuario1 = new Usuario(1, "Admin", "password", "gerente");

sistema.adicionarUsuario(usuario1);
sistema.registrarPonto(1, "Entrada");
sistema.registrarPonto(1, "Saída");

console.log(sistema.gerarRelatorio(1));


