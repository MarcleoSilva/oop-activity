import Funcionario from "./Funcionario.js";

class Engenheiro extends Funcionario {
    constructor(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario, crea) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);

        this.crea = crea;
    }

    getCrea() { return this.crea};
    setCrea(crea) {this.crea = crea};

    toString() {
        return `Engenheiro{${super.toString()}, crea='${this.crea}'}`
    }
}

export default Engenheiro;
