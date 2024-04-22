import '../sass/components/_single_marca.scss'

interface IProps {
    img: JSX.Element
}

const SingleMarca = ({ img }: IProps) => {
  return (
    <div className='single-marca'>
        {img}
    </div>
  )
}

export default SingleMarca