import '../sass/components/_button_product_selector.scss'

interface IProps {
    text: string
    checked: boolean
}

const ButtonProductSelector = ({text, checked}: IProps) => {
  return (
    <button className={checked ? 'button-product-selector__checked': 'button-product-selector'}>{text}</button>
  )
}

export default ButtonProductSelector