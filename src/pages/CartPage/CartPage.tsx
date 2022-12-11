import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import CartProductListItemExended from 'components/Cart/CartProductListItemExended'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'
import './CartPage.scss'

export type Props = {}

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <section className="cart">
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExended}
                />
            </Grid>
            <div className="cart-total">
                <CartTotal productsInCart={productsInCart} />
                <Link to="/checkout" className="cart-btn">
                    Proceed to checkout
                </Link>
            </div>
        </section>
    )
}

export default CartPage
