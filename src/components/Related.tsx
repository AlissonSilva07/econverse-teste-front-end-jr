import '../sass/components/_related.scss'
import ProductSelector from './ProductSelector'
import SectionTitle from './SectionTitle'

const Related = () => {
  return (
    <section className='related-products'>
        <SectionTitle title='Produtos Relacionados' /> 
        <ProductSelector />
    </section>
  )
}

export default Related