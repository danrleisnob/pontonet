import './App.css'
import Direitos from './components/direitos'
import Footter from './components/footer'
import Header from './components/header'
import Historia from './components/historia'
import Ofertas from './components/ofertas'
import Promocao from './components/promocao'
import FAQ from './components/questionario'

function App() {

  return (
      <div>
        <Header />
        <Promocao />
        <Ofertas />
        <Historia />
        <FAQ />
        <Footter />
        <Direitos />
      </div>
  )
}

export default App
