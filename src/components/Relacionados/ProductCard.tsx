import { Product } from '../../types/Product'
import '../../sass/components/Relacionados/_product_card.scss'
import ModularButton from '../ModularButton'
import ModalProduto from './ModalProduto'
import { useState } from 'react'

interface IProps {
    product: Product
}

const ProductCard = ({product}: IProps) => {
    // função que aumenta o preço atual em 25% para simular o preço anterior 
    const precoAnterior = (precoAtual: number): number => {
        return precoAtual + (precoAtual * 0.25);
    }

    const [ showModal, setShowModal ] = useState<boolean>(false)

    const handleOpenModal = (): void => {
        setShowModal(true)
    }

    const handleCloseModal = (): void => {
        setShowModal(false)
    }

  return (
    <>
        <div key={product.productName} className='product-card'>
            <img src={product.photo} alt={product.productName} className='product-card__img' />
            <div className='product-card__details'>
                <p className='product-card__details-title'>{product.productName}</p>
                <p className='product-card__details-previous-price'>R$ {precoAnterior(product.price)}</p>
                <p className='product-card__details-current-price'>R$ {product.price}</p>
                <p className='product-card__details-installments'>ou 2x de R$ {product.price / 2} sem juros</p>
                <p className='product-card__details-shipping'>Frete grátis</p>
            </div>
            <ModularButton action={handleOpenModal} type={2} btnText='COMPRAR' />
        </div>

        {showModal && <ModalProduto close={handleCloseModal} product={product} />}
    </>
  )
}

export default ProductCard