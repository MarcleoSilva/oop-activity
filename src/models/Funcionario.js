import Fisica from "./Fisica";

class Funcionario extends Fisica {
    constructor(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);

        if(new.target === Funcionario) {
            throw new Error('Não é possível instanciar um Funcionário inespecífico')
        }

        this.cpf = cpf;
        this.rg = rg;
        this.matricula = matricula;
        this.setor = setor;
        this.salario = salario;
    }

    getCpf() { return this.cpf};
    setCpf(cpf) {this.cpf = cpf};

    getRg() { return this.rg};
    setRg(rg) {this.rg = rg};

    getMatricula() { return this.matricula};
    setMatricula(matricula) {this.matricula = matricula};

    getSetor() { return this.setor};
    setSetor(setor) {this.setor = setor};

    getSalario() { return this.salario};
    setSalario(salario) {this.salario = salario};

    getSalarioFinal() {
        return this.salario
    }

    toString() {
        return `${super.toString()}, cpf='${this.cpf}', rg='${this.rg}', matricula='${this.matricula}', setor=${this.setor}, salario=R$ ${this.salario.toFixed(2)}, salarioFinal=R$ ${this.getSalarioFinal().toFixed(2)}`
    }
}

export default Funcionario;
