import { Grid, Typography } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import ProductListItem from './ProductListItem'

type ProductProps = {
    id: number
    image: string
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductList = () => {
    const productsArray = useAppSelector((state) => state.products)
    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                Product List
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                marginBottom={12}
            >
                {productsArray.map(
                    (
                        {
                            id,
                            name,
                            description,
                            type,
                            capacity,
                            price,
                            image,
                        }: ProductProps,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductList
