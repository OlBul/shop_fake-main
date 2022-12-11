import React from 'react'
import { Product } from 'components/Products/productsArray'

type Props = {
    productCount: number
    product: Product
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.name}:{productCount}
        </div>
    )
}

export default CartProductListItem
