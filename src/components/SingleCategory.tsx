import '../sass/components/_single_category.scss'

interface IProps {
    img: JSX.Element
    text: string
}

const SingleCategory = ({img, text}: IProps) => {
  return (
    <div className='single-category'>
        <div className='single-category__img-container'>
            {img}
        </div>
        <p className='single-category__text'>{text}</p>
    </div>
  )
}

export default SingleCategory