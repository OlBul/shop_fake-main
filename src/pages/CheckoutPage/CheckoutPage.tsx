import { Button } from '@mui/material'
import axios from 'axios'
import CartTotal from 'components/Cart/CartTotal'
import React, { useState } from 'react'
import { useAppSelector } from 'redux/hooks'
import './ChekoutPage.scss'

type Props = {}

type OrderData = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)
    const [orderData, setOrderData] = useState<OrderData>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'http://my-json-server.typicode.com/kznkv-skillup/server/orders',
                { name: orderData.name, address: orderData.address }
            )
            .then((res) => res.data)
            .then(({ name, address }) => {
                setOrderData({ name, address })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form className="checkout-form" onSubmit={orderSend}>
                <div className="checkout-feild">
                    <p className="chekout-title">Submit your details</p>
                    <input
                        className="checkout-input"
                        type="text"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div className="checkout-feild">
                    <input
                        className="checkout-input"
                        type="text"
                        placeholder="Your address"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <div className="checkout-total">
                    <span>Your order for the amount!</span>
                    <CartTotal productsInCart={productsInCart} />
                </div>
                <Button type="submit" className="checkout-btn">
                    Send
                </Button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div className="response">
                <div className="respovse-name">
                    Dear, <span>{orderData.name}</span> thanks for order!
                </div>
                <p className="response-adress">
                    Address: <span>{orderData.address}</span>{' '}
                </p>
            </div>
        )
    }
    console.log(orderData)
    return (
        <section className="checkout">
            <h1 className="chekout-title">Checkout Page</h1>{' '}
            {isOrderSend ? renderMessage() : renderForm()}
        </section>
    )
}

export default CheckoutPage
