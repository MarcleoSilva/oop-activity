import Fisica from "./Fisica.js";

class Cliente extends Fisica {
    constructor(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, protocoloAtendimento) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);

        this.protocoloAtendimento = protocoloAtendimento;
    }

    getProtocoloAtendimento() { return this.protocoloAtendimento};
    setProtocoloAtendimento(protocoloAtendimento) {this.protocoloAtendimento = protocoloAtendimento};

    toString() {
        return `Cliente{${super.toString()}, protocoloAtendimento=${this.protocoloAtendimento}}`
    }
}

export default Cliente;
