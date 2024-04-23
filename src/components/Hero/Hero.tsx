import '../../sass/components/Hero/_hero.scss'
import ModularButton from '../ModularButton'


const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-container__content'>
          <p className='hero-container__content__h1'>Venha conhecer nossas <br /> promoções</p>
          <p className='hero-container__content__h3'>50% Off nos produtos </p>
          <ModularButton type={1} btnText='Ver produto' action={() => {}} />
        </div>
    </section>
  )
}

export default Hero