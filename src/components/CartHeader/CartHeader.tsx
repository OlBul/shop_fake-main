import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { useAppSelector } from 'redux/hooks'

export type Props = {}

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
