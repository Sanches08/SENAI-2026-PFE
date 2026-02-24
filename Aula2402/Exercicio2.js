class Cidade {
    QtdeHabitantes = 200000;
    nome = 'São Paulo';
    estado = 'SP';

    mostrar(){
        console.log(this.QtdeHabitantes);
        console.log(this.nome);
        console.log(this.estado);
    }
}

const cidade = new Cidade();
cidade.nome = 'Rio de Janeiro';
cidade.mostrar();