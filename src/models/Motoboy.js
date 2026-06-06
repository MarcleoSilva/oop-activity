import Funcionario from "./Funcionario.js";

class Motoboy extends Funcionario {
    constructor(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario, carteiraDeHabilitacao) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);

        this.carteiraDeHabilitacao = carteiraDeHabilitacao;
    }

    getCarteiraDeHabilitacao() { return this.carteiraDeHabilitacao};
    setCarteiraDeHabilitacao(carteiraDeHabilitacao) {this.carteiraDeHabilitacao = carteiraDeHabilitacao};

    toString() {
        return `Motoboy{${super.toString()}, carteiraDeHabilitacao='${this.carteiraDeHabilitacao}'}`
    }
}

export default Motoboy;
