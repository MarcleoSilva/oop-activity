class Produto {
    constructor(nome, categoria, preco) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco
    }

    getNome() { return this.nome};
    setNome(nome) {this.nome = nome};

    getCategoria() { return this.categoria};
    setCategoria(categoria) {this.categoria = categoria};

    getPreco() { return this.preco};
    setPreco(preco) {this.preco = preco};

    toString() {
        return `Produto{nome='${this.nome}', categoria='${this.categoria}', preco=R$ ${this.preco.toFixed(2)}}`
    }
}

export default Produto;
