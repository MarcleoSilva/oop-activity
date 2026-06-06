import Pessoa from "./Pessoa.js";

class Fisica extends Pessoa {
    constructor(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento) {
        super(nome, telefone, email, endereco);

        if(new.target === Fisica) {
            throw new Error('Não é possível instanciar uma Pessoa Física inesppecífica')
        }

        this.genero = genero;
        this.estadoCivil = estadoCivil;
        this.dataNascimento = dataNascimento;
    }

    getGenero() { return this.genero;}
    setGenero(genero) {this.genero = genero}

    getEstadoCivil() { return this.estadoCivil; }
    setEstadoCivil(estadoCivil) {this.estadoCivil = estadoCivil}

    getDataNascimento () {
        return this.dataNascimento
    }
    setDataNascimento (dataNascimento) {
        this.dataNascimento = dataNascimento
    }

    getIdade() {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        const mes = hoje.getMonth() - this.dataNascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < this.dataNascimento.getDate())) {
            idade--;
        }
        return idade
    }

      toString() {
    return `${super.toString()}, genero=${this.genero}, estadoCivil=${this.estadoCivil}, idade=${this.getIdade()}`;
  }
}

export default Fisica;