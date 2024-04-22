import '../sass/components/_copyright.scss'

import Econverse from '../assets/Copyright/Grupo 1999.png'
import VTex from '../assets/Copyright/Group 35.png'

const Copyright = () => {
  return (
    <section className='copyright'>
        <p className='copyright__text'>
            Copyright © 2019. Todos os direitos reservados. 
            Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
        </p>
        <div className="copyright__icons">
            <img src={Econverse} alt="Econverse" className="copyright__icons__img" />
            <img src={VTex} alt="VTex" className="copyright__icons__img" />
        </div>  
    </section>
  )
}

export default Copyright