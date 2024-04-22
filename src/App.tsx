import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Marcas from './components/Marcas'
import Parceiros from './components/Parceiros'
import Produtos from './components/Produtos'
import Related from './components/Related'
import SectionTitle from './components/SectionTitle'
import './sass/styles.scss'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Related />
      <Parceiros />
      <SectionTitle title='Produtos Relacionados' sub='Ver Todos' />
      <Produtos />
      <Marcas />
      <Footer />
    </>
  )
}

export default App
