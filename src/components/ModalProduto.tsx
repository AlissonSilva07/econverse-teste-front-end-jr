import '../sass/components/_modal_produto.scss'

import Minus from '../assets/ModalProduto/minus.png'
import Plus from '../assets/ModalProduto/plus.png'
import X from '../assets/ModalProduto/x (1).png'
import { Product } from '../types/Product'
import ModularButton from './ModularButton'

interface IProps {
    close: () => void
    product: Product
}

const ModalProduto = ({close, product}: IProps) => {
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
                <p className="modal-produto__info__price">{product.price}</p>
                <p className="modal-produto__info__sub">{product.descriptionShort}</p>
                <a href="#" className="modal-produto__info__detail"></a>
                <div className="modal-produto__info__range-group">
                    <button className="modal-produto__info__range-group__minus">
                        <img src={Minus} alt="Minus" />
                    </button>
                    <input type="number" value={1} name="" id="" className="modal-produto__info__range-group__input" />
                    <button className="modal-produto__info__range-group__plus">
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