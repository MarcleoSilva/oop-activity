export default class Pessoa {
    constructor(nome, telefone, email, endereco) {
        if (new.target === Pessoa) {
            throw new Error('Não é possível instanciar uma pessoa inespecífica')
        }

        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco
    }

    getNome() { return this.nome};
    setNome(nome) {this.nome = nome};

    getTelefone() { return this.telefone};
    setTelefone(Telefone) {this.telefone = Telefone};

    getEmail() { return this.email};
    setEmail(Email) {this.email = Email};

    getEndereco() { return this.endereco};
    setEndereco(Endereco) {this.endereco = Endereco};

    toString() {
        return `nome = '${this.nome}', telefone = '${this.telefone}', email = '${this.email}', endereco = '${this.endereco}'`
    }
    
}