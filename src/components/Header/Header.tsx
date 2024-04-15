import '../../sass/components/_header.scss'

import ShieldIcon from '../../assets/Header/ShieldCheck.png'
import TruckIcon from '../../assets/Header/Truck.png'
import CardIcon from '../../assets/Header/CreditCard.png'
import Logo from '../../assets/Header/Group 35.png'
import SearchIcon from '../../assets/Header/MagnifyingGlass.png'
import BoxIcon from '../../assets/Header/Group.png'
import HeartIcon from '../../assets/Header/Heart.png'
import ProfileIcon from '../../assets/Header/UserCircle.png'
import CartIcon from '../../assets/Header/ShoppingCart.png'
import CrownIcon from '../../assets/Header/CrownSimple.png'

const Header = () => {
  return (
    <header>

        <div className="header-top">
            <div className='header-top__item'>
                <img src={ShieldIcon} alt="Shield Check" />
                <p>Compra <span>100% segura</span></p>
            </div>
            <div className='header-top__item'>
                <img src={TruckIcon} alt="Shield Check" />
                <p><span>Frete grátis</span> acima de R$ 200</p>
            </div>
            <div className='header-top__item'>
                <img src={CardIcon} alt="Shield Check" />
                <p><span>Parcele</span> suas compras.</p>
            </div>
        </div>

        <div className="header-middle">
            <img src={Logo} alt="Logo da VTex" className='header-middle__logo' />
            <div className='header-middle__input-group'>
                <input type="text" placeholder='O que você está buscando?' className='header-middle__input-group__input' />
                <button className='header-middle__input-group__search-button'>
                    <img src={SearchIcon} alt="Pesquisar" />
                </button>
            </div>
            <div className="header-middle__buttons">
                <img src={BoxIcon} alt="Inbox" />
                <img src={HeartIcon} alt="Favoritos" />
                <img src={ProfileIcon} alt="Perfil" />
                <img src={CartIcon} alt="Carrinho" />
            </div>
        </div>

        <div className="header-bottom">
            <button className="header-bottom__nav-button">TODAS AS CATEGORIAS</button>
            <button className="header-bottom__nav-button">SUPERMERCADO</button>
            <button className="header-bottom__nav-button">LIVROS</button>
            <button className="header-bottom__nav-button">MODA</button>
            <button className="header-bottom__nav-button">LANÇAMENTOS</button>
            <button className="header-bottom__nav-button">OFERTAS DO DIA</button>
            <button className="header-bottom__nav-button">
                <img src={CrownIcon} alt="Assinatura" />
                ASSINATURA
            </button>
        </div>
    </header>
  )
}

export default Header