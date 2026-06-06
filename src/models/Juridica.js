import Pessoa from "./Pessoa.js";

class Juridica extends Pessoa {
    constructor(nome, telefone, email, endereco, cnpj, inscricaoEstadual) {
        super(nome, telefone, email, endereco);

        if(new.target === Juridica) {
            throw new Error('Não é possível instanciar uma Pessoa Jurídica apenas')
        }

        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
    }

    getCnpj() { return this.cnpj};
    setCnpj(cnpj) {this.cnpj = cnpj};

    getInscricaoEstadual() { return this.inscricaoEstadual};
    setInscricaoEstadual(inscricaoEstadual) {this.inscricaoEstadual = inscricaoEstadual};

    toString() {
        return `${super.toString()}, cnpj='${this.cnpj}', inscricaoEstadual='${this.inscricaoEstadual}'`
    }
}

export default Juridica;
