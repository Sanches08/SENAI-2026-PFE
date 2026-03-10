import './App.css'
import Mensagem from './components/mensagem.jsx'
import PropsNomeado from './components/propsNomeado.jsx'  
import MeuAvatar from './components/MeuAvatar.jsx'

function App() {
  return (
    <>
      <MeuAvatar nome='Mariana' idade='17 anos' estiloMusical='Funk pesadão' Disciplinapreferida='Nenhuma pq nenhum é tão bom quanto ela' />
    </>
    /*{<>
    <Mensagem titulo='Aprendendo Props ou Properties ou ainda Propriedades' texto='Bem vindo(a) ao mundo das Props' nome='Mariana'/>
    <Mensagem titulo='Interclasse ' texto='Bem vindo(a) ao interclasse' nome='Mariana'/>
    </>}*/
    
  )
}

export default App
