import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import React, { useState } from 'react'
import './ProductListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/LikeReducer'
import { addProductToCart } from 'redux/CartReducer'

type ProductProps = {
    id: number
    image: string
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = ({
    id,
    image,
    name,
    description,
    type,
    capacity,
    price,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)
    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)

    return (
        <Card>
            <CardContent>
                <div className="product-image">
                    <img src={image} alt=""></img>
                </div>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <h3 className="product-title">{name}</h3>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">$ {price}</div>
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => dispatch(addProductToCart({ id, count }))}
                >
                    Add to card
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
