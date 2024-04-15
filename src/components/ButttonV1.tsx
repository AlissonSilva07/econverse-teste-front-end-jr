import '../sass/components/_button_variant_1.scss'

interface IProps {
    btnText: string
}

const ButttonV1 = ({btnText}: IProps) => {
  return (
    <button className='button-v1'>{btnText}</button>
  )
}

export default ButttonV1