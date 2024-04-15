import '../sass/components/_produtc_selector.scss'
import ButtonProductSelector from './ButtonProductSelector'

const ProductSelector = () => {
  return (
    <div className='product-selector'>
        <ButtonProductSelector text='CELULAR' checked={true} />
        <ButtonProductSelector text='ACESSÓRIOS' checked={false} />
        <ButtonProductSelector text='TABLETS' checked={false} />
        <ButtonProductSelector text='NOTEBOOKS' checked={false} />
        <ButtonProductSelector text='TVS' checked={false} />
        <ButtonProductSelector text='VER TODOS' checked={false} />
    </div>
  )
}

export default ProductSelector