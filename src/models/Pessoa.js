class Pessoa {
    constructor(nome, telefone, email, endereco) {
        if (new.target === Pessoa) {
            throw new Error('')
        }
    }
}