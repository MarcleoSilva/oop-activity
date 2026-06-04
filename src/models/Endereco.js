class Endereco {
    constructor(logradouro, numero, complemento, cep, cidade, uf) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf
    }

    getLogradouro() { return this.logradouro};
    setLogradouro(logradouro) {this.logradouro = logradouro};

    getNumero() { return this.numero};
    setNumero(numero) {this.numero = numero};

    getComplemento() { return this.complemento};
    setComplemento(complemento) {this.complemento = complemento};

    getCep() { return this.cep};
    setCep(cep) {this.cep = cep};

    getCidade() { return this.cidade};
    setCidade(cidade) {this.cidade = cidade};

    getUf() { return this.uf};
    setUf(uf) {this.uf = uf};

    toString() {
        const comp = this.complemento ? `, ${this.complemento}` : '';
        return `${this.logradouro}, n. ${this.numero}${comp} - ${this.cidade}/${this.uf.getSigla()} - CEP ${this.cep}`
    }
}

export default Endereco;
