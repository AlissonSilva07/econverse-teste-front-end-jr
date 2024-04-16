import '../sass/components/_carousel.scss'
import ProductCard from './ProductCard'

import { useEffect, useState } from 'react'
import { Product } from '../models/Product'
import { baseUrl } from '../paths'

const Carousel = () => {

    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        fetch(baseUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(resp => resp.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err))
    }, [])

  return (
    <div className='carousel'>
        {products && products.map(p => <ProductCard product={p} />)}
    </div>
  )
}

export default Carousel