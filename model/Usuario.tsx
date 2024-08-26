class Usuario {
    constructor(id, nome, senha, cargo) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cargo = cargo; 
    }

    autenticar(senha) {
        return this.senha === senha;
    }

    atualizarSenha(novaSenha) {
        this.senha = novaSenha;
    }
}

const usuario = new Usuario(1, "Admin", "password", "gerente");
if (usuario.autenticar("password")) {
    console.log("Autenticação bem-sucedida");
}
