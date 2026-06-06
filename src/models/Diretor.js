import Funcionario from "./Funcionario.js";

class Diretor extends Funcionario {
    static PREMIO = 0.2;

    constructor(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
    }

    getSalarioFinal() {
        return this.getSalario() * (1 + Diretor.PREMIO)
    }

    admitir(funcionario) {
        console.log(`Diretor ${this.getNome()} ADMITIU o funcionario ${funcionario.getNome()} (matricula ${funcionario.getMatricula()}).`)
    }

    demitir(funcionario) {
        console.log(`Diretor ${this.getNome()} DEMITIU o funcionario ${funcionario.getNome()} (matricula ${funcionario.getMatricula()}).`)
    }

    toString() {
        return `Diretor{${super.toString()}, PREMIO=${Diretor.PREMIO}}`
    }
}

export default Diretor;
