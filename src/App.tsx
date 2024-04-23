import Categories from './components/Categories/Categories'
import Copyright from './components/Copyright/Copyright'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Marcas from './components/Marcas/Marcas'
import Parceiros from './components/Parceiros/Parceiros'
import Produtos from './components/Relacionados/Produtos'
import Related from './components/Relacionados/Related'
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
      <Copyright />
    </>
  )
}

export default App
