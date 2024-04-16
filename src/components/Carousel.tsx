import '../sass/components/_carousel.scss'
import ProductCard from './ProductCard'

import { useEffect, useState } from 'react'
import { Product } from '../types/Product'

const Carousel = () => {

    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        fetch('produtos.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
        .then(resp => resp.json())
        .then(data => {
            setProducts(data.products)
        })
        .catch(err => console.error(err))
    }, [])

  return (
    <div className='carousel'>
        {products && products.length > 0 && products.map(p => (
            <ProductCard key={p.productName} product={p} />
        ))}
    </div>
  )
}

export default Carousel