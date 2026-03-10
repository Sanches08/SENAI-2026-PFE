import Marianao from '../assets/IMG/mariana.png'

export default function PropsNomeado({nome,idade,fotoPerfil, estiloMusical,Disciplinapreferida}){
    return(
        <>
        
        <h1>{nome}</h1>
        <p>Idade: {idade}</p>
        <p><img src={Marianao} alt="" /></p>
        <p>Estilo Musical preferido: {estiloMusical}</p>
        <p>Disciplina Preferida: {Disciplinapreferida}</p>
        </>
    )
}