import './App.css';
import logo from './assets/SESI-SENAI.jpg'

function App() {
  return (
    <div className='container'>
      <img src={logo} alt="" className='logo'/>
      <h1 className='Titulo'>Login</h1>
      <span className='subtitulo'>para Continuar</span>
      <label htmlFor='nome' className='label'>Nome</label>
      <input type='text' className='campo' id='nome' placeholder='Seu nome'/>
      <label htmlFor='senha' className='label'>Senha</label>
      <input type='text' className='campo' id='senha' placeholder='**********'/>
      <button className='botao'>Log in</button>
      <a href='#' className='link'>Esqueceu a senha?</a>
      <a href='#' className='link'>Cadastre-se</a>
    </div>
  )
}

export default App
