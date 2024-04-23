import '../../sass/components/Footer/_footer.scss'

import SocialsFacebook from '../../assets/Footer/023-facebook.png'
import SocialsInstagram from '../../assets/Footer/044-instagram.png'
import SocialsYoutube from '../../assets/Footer/116-youtube.png'

import Visa from '../../assets/Footer/Group 1351.png'
import Elo from '../../assets/Footer/elo.png'
import Alelo from '../../assets/Footer/alelo.png'
import Diners from '../../assets/Footer/dinners.png'
import Ifood from '../../assets/Footer/ifood.png'
import MasterCard from '../../assets/Footer/mastercard.png'
import Pix from '../../assets/Footer/pix.png'
import Amex from '../../assets/Footer/amex.png'
import Ticket from '../../assets/Footer/ticket.png'
import Sodexo from '../../assets/Footer/sodexo.png'
import ModularButton from '../ModularButton'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__sobre">
            <p className="footer__sobre__title">SOBRE NÓS</p>
            <div className="footer__sobre__links">
                <a href="#" className="footer__sobre__links__link">CONHEÇA</a>
                <a href="#" className="footer__sobre__links__link">COMO COMPRAR</a>
                <a href="#" className="footer__sobre__links__link">INDICAÇÃO E DESCONTO</a>
            </div>
            <div className="footer__sobre__socials">
                <button className="footer__sobre__socials__social-button">
                    <img src={SocialsFacebook} alt="Facebook" />
                </button>
                <button className="footer__sobre__socials__social-button">
                    <img src={SocialsInstagram} alt="Instagram" />
                </button>
                <button className="footer__sobre__socials__social-button">
                    <img src={SocialsYoutube} alt="Youtube" />
                </button>
            </div>
        </div>
        <div className="footer__info">
            <p className="footer__info__title">INFORMAÇÕES ÚTEIS</p>
            <div className="footer__info__group">
                <a href="#" className="footer__info__group__link">FALE CONOSCO</a>
                <a href="#" className="footer__info__group__link">DÚVIDAS</a>
                <a href="#" className="footer__info__group__link">PRAZOS DE ENTREGA</a>
                <a href="#" className="footer__info__group__link">FORMAS DE PAGAMENTO</a>
                <a href="#" className="footer__info__group__link">POLÍTICA DE PRIVACIDADE</a>
                <a href="#" className="footer__info__group__link">TROCAS E DEVOLUÇÕES</a>
            </div> 
        </div>
        <div className="footer__pagamento">
           <p className="footer__pagamento__title">FORMAS DE PAGAMENTO</p>
           <div className="footer__pagamento_group">
                <img src={Visa} alt="Visa" className="footer__pagamento_group__img" />
                <img src={Elo} alt="Elo" className="footer__pagamento_group__img" />
                <img src={Alelo} alt="Alelo" className="footer__pagamento_group__img" />
                <img src={Diners} alt="Diners" className="footer__pagamento_group__img" />
                <img src={Ifood} alt="Ifood" className="footer__pagamento_group__img" />
                <img src={MasterCard} alt="MasterCard" className="footer__pagamento_group__img" />
                <img src={Pix} alt="Pix" className="footer__pagamento_group__img" />
                <img src={Amex} alt="Amex" className="footer__pagamento_group__img" />
                <img src={Ticket} alt="Ticket" className="footer__pagamento_group__img" />
                <img src={Sodexo } alt="Sodexo " className="footer__pagamento_group__img" />
           </div> 
        </div>
        <div className='footer__spacer'></div>
        <div className="footer__cadastro">
            <div className="footer__cadastro__title">
                <p className="footer__cadastro__title-weak">CADASTRE-SE E RECEBA NOSSAS</p>
                <p className="footer__cadastro__title-strong">NOVIDADES E PROMOÇÕES</p>
            </div>
            <p className="footer__cadastro__subtitle">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
            <form action='#' className="footer__cadastro__input-area">
                <input type="text" name="" id="" className="footer__cadastro__input-area__input" placeholder='SEU E-MAIL' />
                <ModularButton type={4} btnText='OK' action={() => {}} />
            </form>
        </div>
    </footer>
  )
}

export default Footer