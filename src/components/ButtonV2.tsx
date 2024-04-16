import '../sass/components/_button_variant_2.scss'

interface IProps {
    btnText: string
}

const ButttonV2 = ({btnText}: IProps) => {
  return (
    <button className='button-v2'>{btnText}</button>
  )
}

export default ButttonV2