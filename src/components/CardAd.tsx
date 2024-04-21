import '../sass/components/_card_ad.scss'
import ModularButton from './ModularButton'

const CardAd = () => {
  return (
    <div className='card-ad'>
        <p className="card-ad__title">Parceiros</p>
        <p className="card-ad__subtitle">Lorem ipsum dolor sit amet, consectetur</p>
        <ModularButton type={3} btnText='CONFIRA' />
    </div>
  )
}

export default CardAd