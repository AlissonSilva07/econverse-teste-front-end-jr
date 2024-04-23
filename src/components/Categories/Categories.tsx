import '../../sass/components/Categories/_categories.scss'
import SingleCategory from './SingleCategory'

import TecnologiaIcon from '../../assets/Categories/monitorar-tablet-e-smartohone 1.png'
import SupermercadoIcon from '../../assets/Categories/supermercados 1.png'
import BebidasIcon from '../../assets/Categories/whiskey.png'
import FerramentasIcon from '../../assets/Categories/ferramentas 1.png'
import SaudeIcon from '../../assets/Categories/cuidados-de-saude 1.png'
import EsportesIcon from '../../assets/Categories/corrida 1.png'
import ModaIcon from '../../assets/Categories/moda 1.png'

const Categories = () => {
  return (
    <section className='categories'>
        <SingleCategory img={<img src={TecnologiaIcon} alt='Tecnologia' />} text='Tecnologia' checked={true} />
        <SingleCategory img={<img src={SupermercadoIcon} alt='Supermercado' />} text='Supermercado' checked={false} />
        <SingleCategory img={<img src={BebidasIcon} alt='Bebidas' />} text='Bebidas' checked={false} />
        <SingleCategory img={<img src={FerramentasIcon} alt='Ferramentas' />} text='Ferramentas' checked={false} />
        <SingleCategory img={<img src={SaudeIcon} alt='Saúde' />} text='Saúde' checked={false} />
        <SingleCategory img={<img src={EsportesIcon} alt='Esportes e Fitness' />} text='Esportes e Fitness' checked={false} />
        <SingleCategory img={<img src={ModaIcon} alt='Moda' />} text='Moda' checked={false} />
    </section>
  )
}

export default Categories