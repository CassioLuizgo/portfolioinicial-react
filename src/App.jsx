import './App.css'
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Skills } from './components/skills';
import './icons'; // importa a biblioteca com os ícones
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <>
      
      <Header />
      <Hero />
      <Skills />

    </>
  )
}

export default App
