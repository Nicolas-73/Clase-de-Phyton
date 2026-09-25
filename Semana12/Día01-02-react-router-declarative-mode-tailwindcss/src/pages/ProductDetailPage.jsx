import { useState } from 'react'
import { Link, useParams } from 'react-router'

const ProductDetailPage = () => {
  const { id } = useParams()

  const [product, setProduct] = useState()

  // TODO: Imprimir los datos del producto(ej. title, descripción, price, thumbnail 7 y marca) en el return de este producto

  return (
    <main>
      <Link to="/products">Regresar al listado de productos</Link>

      <ul>
        <li className="font-bold">{product?.title}</li>
        <li>{product?.description}</li>
        <li>S/ {product?.price}</li>
        <li>{product?.brand}</li>
        <li><img src={product?.thumbnail} /></li>
      </ul>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </main>
  )
}

export default ProductDetailPage