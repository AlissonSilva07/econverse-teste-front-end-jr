import '../sass/components/_modal_produto.scss'

import Minus from '../assets/ModalProduto/minus.png'
import Plus from '../assets/ModalProduto/plus.png'
import X from '../assets/ModalProduto/x (1).png'
import { Product } from '../types/Product'
import ModularButton from './ModularButton'
import { useState } from 'react'

interface IProps {
    close: () => void
    product: Product
}

const ModalProduto = ({close, product}: IProps) => {
    const [ qtdProduto, setQtdProduto ] = useState<number>(1)

    const handleQtdProduto = (command: string): void => {
        switch (command) {
            case '-':
                setQtdProduto(qtdProduto === 1 ? 1 : (qtdProduto - 1))
                break;
            case '+':
                setQtdProduto(qtdProduto + 1)
                break;
        }

    }

  return (
    <div className='area-modal-produto'>
        <div className='modal-produto'>
            <button onClick={close} className="modal-produto__x">
                <img src={X} alt="X" />
            </button>
            <div className="modal-produto__picture">
                <img src={product.photo} alt={product.productName} />
            </div>
            <div className="modal-produto__info">
                <p className="modal-produto__info__title">{product.productName}</p>
                <p className="modal-produto__info__price">R$ {product.price}</p>
                <p className="modal-produto__info__sub">{product.descriptionShort}</p>
                <a href="#" className="modal-produto__info__detail">Veja mais detalhes do produto &gt;</a>
                <div className="modal-produto__info__range-group">
                    <button onClick={() => handleQtdProduto('-')} className="modal-produto__info__range-group__minus">
                        <img src={Minus} alt="Minus" />
                    </button>
                    <span className="modal-produto__info__range-group__input">{qtdProduto}</span>
                    <button onClick={() => handleQtdProduto('+')} className="modal-produto__info__range-group__plus">
                        <img src={Plus} alt="Plus" />
                    </button>
                </div>
                <ModularButton type={2} btnText='COMPRAR' action={() => {}} />
            </div>
        </div>
    </div>
  )
}

export default ModalProduto