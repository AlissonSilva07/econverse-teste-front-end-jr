import '../sass/components/_modular_button.scss'

interface IProps {
    type: number
    btnText: string
}

const ModularButton = ({type, btnText}: IProps) => {
  return (
    <button className={type === 1 ? 'button-v1' : type === 2 ? 'button-v2' : type === 3 ? 'button-v3' : type === 4 ? 'button-v4' : undefined}>{btnText}</button>
  )
}

export default ModularButton