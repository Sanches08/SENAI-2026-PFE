class Caneta {
    cor = 'Amarela';
    marca = 'Faber';
    ponta = 'fina';
    qtdTinta = 10;//ml
    tampa = false;

    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }

    getQtdTinta(){
        return this.qtdTinta;
    }
    //Criar um método sublinhar, que recebe um parâmetro valor que vai representar a quantidade gasta de tinta ao sublinhar, 
    // desconte a quantidade de tinta e mostre a quantidade restante, porém não permita que seja subtraída se o valor for
    // maior que a quantidade ded tinta da classe

    sublinha(valor){
        if (valor > this.qtdTinta){
            return 'Não é possível sublinhar, tinta insuficiente';
        }
        this.qtdTinta -= valor;
        return 'Sublinhando... Quantidade restante de tinta: ' + this.qtdTinta;
    }

    //Cria método recarregar que recebe um valor e acrescenta e soma esse valor a qtd de tinta da classe, 
    // // considerando que a qtd de tinta não pode ser maior do que 15 ml.

    recarregar(valor){
        if (this.qtdTinta + valor > 15){
            return 'Não é possível recarregar, a quantidade de tinta não pode ser maior que 15 ml';
        }
        this.qtdTinta += valor;
        return 'Caneta recarregada. Quantidade de tinta: ' + this.qtdTinta;
    }
}


const canetaFIna = new Caneta();
canetaFIna.escrever();
canetaFIna.escrever();
console.log('Aquantidade restante de tinta é: ' +canetaFIna.getQtdTinta());
console.log(canetaFIna.sublinha(9));
console.log(canetaFIna.recarregar(5));