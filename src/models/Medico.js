import Funcionario from "./Funcionario.js";

class Medico extends Funcionario {
    constructor(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario, crm) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);

        this.crm = crm;
    }

    getCrm() { return this.crm};
    setCrm(crm) {this.crm = crm};

    toString() {
        return `Medico{${super.toString()}, crm='${this.crm}'}`
    }
}

export default Medico;
