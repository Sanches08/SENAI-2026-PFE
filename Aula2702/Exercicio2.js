class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }

    concluir() {
        this.concluida = true;
        console.log(`Tarefa "${this.titulo}" marcada como CONCLUÍDA.`);
    }

    reabrir() {
        this.concluida = false;
        console.log(`Tarefa "${this.titulo}" REABERTA.`);
    }
}

class ListaTarefas {

    adicionar(tarefa) {
        
    }

    removerPorTitulo(titulo) {
        
    }

    listar(concluidas = null) {
        
    }
}