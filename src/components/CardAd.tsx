import '../sass/components/_card_ad.scss'
import ModularButton from './ModularButton'

interface IProps {
    title: string
    subtitle: string
    btnText: string
}

const CardAd = ({ title, subtitle, btnText }: IProps) => {
  return (
    <div className='card-ad'>
        <p className="card-ad__title">{title}</p>
        <p className="card-ad__subtitle">{subtitle}</p>
        <ModularButton type={3} btnText={btnText} />
    </div>
  )
}

export default CardAd