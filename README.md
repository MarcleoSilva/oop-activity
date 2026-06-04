# OOP Activity — modelo OO em JavaScript / Node.js

Tradução fiel do modelo orientado a objetos (originalmente especificado em
Java) para **JavaScript moderno (ES Modules)**, rodando em Node.js, sem
Lombok nem frameworks externos.

## Como executar

```bash
npm start        # ou: node src/index.js
```

O `src/index.js` é uma demonstração que exercita herança, sobrescrita,
polimorfismo, as interfaces e as operações matemáticas.

## Estrutura

```
src/
├── enums/        UnidadeFederativa, Genero, EstadoCivil, Setor
├── interfaces/   SalarioFinal, Contratacao, OperacaoMatematica
├── model/        Endereco, Produto, Pessoa, Fisica, Juridica,
│                 Cliente, Funcionario, Engenheiro, Medico, Motoboy,
│                 Diretor, PrestacaoServico, Fornecedor
├── operacoes/    Soma, Subtracao, Multiplicacao, Divisao
└── index.js      Demonstração
```

Cada classe/interface/enum em seu próprio arquivo.

## Como os conceitos de Java foram mapeados em JavaScript

| Conceito Java | Equivalente em JavaScript |
|---|---|
| `enum` (com construtor/atributos) | Classe com instâncias congeladas (`Object.freeze`) expostas como propriedades estáticas |
| `interface` | Classe base cujos métodos lançam erro se não sobrescritos; "implements" via `extends` ou simplesmente fornecendo os métodos |
| Classe `abstract` | Guarda no construtor com `new.target` que impede a instanciação direta |
| `- private` | Campos `#campo` (privacidade real) + getters/setters |
| `# protected` | Convenção `_campo` (acessível por subclasses) + getters/setters |
| `+ public` | Métodos normais |
| `static final PREMIO` | `static PREMIO = 0.2` |
| `LocalDate` / `Period` | `Date` nativo; idade calculada manualmente |
| `ArithmeticException` (divisão por zero) | `Error` com `name = 'ArithmeticException'` |

> Observação: o **Diagrama 2** ("revisão geral") é o modelo definitivo e
> substitui o Diagrama 1 (onde `Fisica`/`Juridica` ainda eram concretas e
> `cpf`/`rg` ficavam em `Fisica`). A implementação segue o Diagrama 2:
> `Pessoa`, `Fisica`, `Juridica` e `Funcionario` são abstratas, e `cpf`/`rg`
> pertencem a `Funcionario`.

## Pontos de destaque

- **Herança:** `Diretor → Funcionario → Fisica → Pessoa`.
- **Polimorfismo:** `index.js` percorre uma lista heterogênea de
  `Funcionario` chamando `getSalarioFinal()` e `toString()`.
- **Sobrescrita:** `Diretor.getSalarioFinal()` aplica o `PREMIO` (20%);
  cada operação matemática sobrescreve `calcular(a, b)`.
- **Interfaces:** `Funcionario` implementa `SalarioFinal`; `Diretor`
  implementa `Contratacao` (`admitir`/`demitir`).
