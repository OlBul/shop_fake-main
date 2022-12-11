import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'
import CartPage from 'pages/CartPage/CartPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList />
                                <Reviews />
                            </>
                        }
                    />

                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
        </>
    )
}

export default Main
