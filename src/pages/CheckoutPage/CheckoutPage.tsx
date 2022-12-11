import axios from 'axios'
import React, { useState } from 'react'
import './ChekoutPage.scss'

type Props = {}

type OrderData = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
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

    const renderForm = () => {
        return (
            <form className="checkout-form">
                <div className="checkout-feild">
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
                <button type="submit" className="checkout-btn">
                    Send
                </button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for order!</div>
                <p>Address: {orderData.address}</p>
            </div>
        )
    }
    console.log(orderData)
    return (
        <section className="checkout">
            <h1 className="chekout-title">CheckoutPage</h1>{' '}
            {isOrderSend ? renderMessage() : renderForm()}
        </section>
    )
}

export default CheckoutPage
