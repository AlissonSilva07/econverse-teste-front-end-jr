import '../sass/components/_modular_button.scss'

interface IProps {
    type: number
    btnText: string
    action: () => void
}

const ModularButton = ({type, btnText, action}: IProps) => {
  return (
    <button onClick={action} className={type === 1 ? 'button-v1' : type === 2 ? 'button-v2' : type === 3 ? 'button-v3' : type === 4 ? 'button-v4' : undefined}>{btnText}</button>
  )
}

export default ModularButton