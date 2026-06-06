import Juridica from "./Juridica.js";

class PrestacaoServico extends Juridica {
    constructor(nome, telefone, email, endereco, cnpj, inscricaoEstadual, contratoInicio, contratoFim) {
        super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);

        this.contratoInicio = contratoInicio;
        this.contratoFim = contratoFim;
    }

    getContratoInicio() { return this.contratoInicio};
    setContratoInicio(contratoInicio) {this.contratoInicio = contratoInicio};

    getContratoFim() { return this.contratoFim};
    setContratoFim(contratoFim) {this.contratoFim = contratoFim};

    toString() {
        return `PrestacaoServico{${super.toString()}, contratoFim=${this.fmt(this.contratoFim)}}`
    }
}

export default PrestacaoServico;
