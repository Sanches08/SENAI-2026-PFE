class Jogador {
    #nome;
    #numero;

    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }

    getNome(){
        return this.#nome
    }
    getNumero(){
        return this.#numero
    }
}//classe mãe geralmnente não pe instanciada

class JogadorFutebol extends Jogador {
    peDominante;
    qtdols;

    constructor(nome,numero, peDominante, totalGols) {
        super(nome, numero);
        this.peDominante = peDominante;
        this.qtdGols = totalGols;
    }
    fazerGol(qtd){
        return this.qtdGols += qtd;
    }

    mostrar(){
        return`O jogador ${super.getNome()} camisa número ${super.getNumero()} tem o pé dominante ${this.peDominante} e tem ${this.qtdGols} gols.`
    };
    }

    const jorge = new JogadorFutebol('Jorge',10,'direito', 10);
    jorge.fazerGol(3);
    console.log(jorge.mostrar());
