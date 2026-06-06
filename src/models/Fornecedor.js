import Juridica from "./Juridica.js";

class Fornecedor extends Juridica {
    constructor(nome, telefone, email, endereco, cnpj, inscricaoEstadual, setor, produto) {
        super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);

        this.setor = setor;
        this.produto = produto;
    }
    getSetor() { return this.setor};
    setSetor(setor) {this.setor = setor};

    getProduto() { return this.produto};
    setProduto(produto) {this.produto = produto};

    toString() {
        return `Fornecedor{${super.toString()}, setor=${this.setor}, produto=[${this.produto}]}`
    }
}

export default Fornecedor;
