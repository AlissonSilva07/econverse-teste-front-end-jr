import '../sass/components/_carousel_container.scss'
import Carousel from './Carousel'

import ChevronLeft from '../assets/Carousel/ChevronLeft.png'
import ChevronRight from '../assets/Carousel/ChevronRight.png'
import { useRef } from 'react'

const CarouselContainer = () => {
  const scroll = useRef<HTMLDivElement>(null)

  const handleNav = (direction: string): void => {
    if (direction === 'left') {
      scroll ? (scroll.current.scrollLeft -= 400) : null
    } else if (direction === 'right') {
      scroll ? (scroll.current.scrollLeft += 400) : null
    }
  }
  return (
    <section className='carousel-container'>
      <button onClick={() => handleNav('left')} className='carousel-container__button-left'>
        <img src={ChevronLeft} alt="" />
      </button>
      <Carousel ref={scroll} />
      <button onClick={() => handleNav('left')} className='carousel-container__button-right'>
        <img src={ChevronRight} alt="" />
      </button>
    </section>
  )
}

export default CarouselContainer