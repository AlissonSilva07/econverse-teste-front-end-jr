import '../sass/components/_related.scss'
import CarouselContainer from './CarouselContainer'
import ProductSelector from './ProductSelector'
import SectionTitle from './SectionTitle'

const Related = () => {
  return (
    <section className='related-products'>
        <SectionTitle title='Produtos Relacionados' /> 
        <ProductSelector />
        <CarouselContainer />
    </section>
  )
}

export default Related