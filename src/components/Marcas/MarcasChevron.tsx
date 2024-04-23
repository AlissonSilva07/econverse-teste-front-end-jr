import '../../sass/components/Marcas/_marcas_chevron.scss'

interface IProps {
    img: JSX.Element
}

const MarcasChevron = ({ img }: IProps) => {
  return (
    <button type='button' className='marcas-chevron'>
        {img}
    </button>
  )
}

export default MarcasChevron