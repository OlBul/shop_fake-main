import { keys } from 'lodash'
import { getProductsObject, Product } from 'components/Products/productsArray'
import CartProductListItem from './CartProductListItem'
import { useAppSelector } from 'redux/hooks'

type ProductsObject = {
    [key: number]: Product
}

export type Props = {
    productsInCart: {
        [id: number]: number
    }

    CartItem?: any
}

const CartProductList = ({
    productsInCart,
    CartItem = CartProductListItem,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const ProductsObject: ProductsObject = getProductsObject(productsArray)
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={ProductsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}

export default CartProductList
