import '../sass/components/_single_category.scss'

interface IProps {
    img: JSX.Element
    text: string
    checked: boolean
}

const SingleCategory = ({img, text, checked}: IProps) => {
  return (
    <div className='single-category'>
        <div className={checked ? 'single-category__img-container__checked' : 'single-category__img-container'}>
            {img}
        </div>
        <p className={checked ? 'single-category__text__checked' : 'single-category__text'}>{text}</p>
    </div>
  )
}

export default SingleCategory