import '../sass/components/_marcas.scss'
import SingleMarca from './SingleMarca'

import ImgMarca from '../assets/Header/Group 35.png'
import ImgChevron from '../assets/Marcas/Vector.png'
import MarcasChevron from './MarcasChevron'

const Marcas = () => {
  return (
    <section className='marcas'>
        <p className='marcas__title'>Navegue por marcas</p>
        <div className='marcas__group'>
            <SingleMarca img={<img src={ImgMarca} alt="Marca VTex" />} />
            <SingleMarca img={<img src={ImgMarca} alt="Marca VTex" />} />
            <SingleMarca img={<img src={ImgMarca} alt="Marca VTex" />} />
            <SingleMarca img={<img src={ImgMarca} alt="Marca VTex" />} />
            <SingleMarca img={<img src={ImgMarca} alt="Marca VTex" />} />
            <div className='marcas__right'>
              <MarcasChevron img={<img src={ImgChevron} alt="Chevron Right" />} />
            </div>
        </div>
    </section>
  )
}

export default Marcas