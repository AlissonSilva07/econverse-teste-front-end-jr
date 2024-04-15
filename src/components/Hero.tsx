import '../sass/components/_hero.scss'

import HeroImg from '../assets/Hero/Rectangle 250.png'
import ButttonV1 from './ButttonV1'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-container__content'>
          <p className='hero-container__content__h1'>Venha conhecer nossas <br /> promoções</p>
          <p className='hero-container__content__h3'>50% Off nos produtos </p>
          <ButttonV1 btnText='Ver produto' />
        </div>
    </section>
  )
}

export default Hero