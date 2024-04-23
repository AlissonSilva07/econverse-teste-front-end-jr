import '../../sass/components/Relacionados/_carousel_container.scss'
import Carousel from './Carousel'

import ChevronLeft from '../../assets/Carousel/ChevronLeft.png'
import ChevronRight from '../../assets/Carousel/ChevronRight.png'
import { MutableRefObject, useRef } from 'react'

const CarouselContainer = () => {
  const refCarousel = useRef() as MutableRefObject<HTMLDivElement>

  const prev = () => {
    refCarousel.current.scrollLeft -= 400
}

const next = () => {
    refCarousel.current.scrollLeft += 400
}

  return (
    <section className='carousel-container'>
      <button onClick={prev} className='carousel-container__button-left'>
        <img src={ChevronLeft} alt="" />
      </button>
      <Carousel refCarousel={refCarousel} />
      <button onClick={next} className='carousel-container__button-right'>
        <img src={ChevronRight} alt="" />
      </button>
    </section>
  )
}

export default CarouselContainer