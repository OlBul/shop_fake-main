import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import Rating from 'components/Rating/Rating'
import React, { useState } from 'react'
import './Reviews.scss'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useAppSelector } from 'redux/hooks'

type Props = {}

export type Review = {
    id: number
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews = useAppSelector((state) => state.reviews)

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [rating, setRating] = useState<number>(0)
    const [newReview, setNewReview] = useState<Review>({
        id: 0,
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview((prevState) => ({
                id: prevState.id + 1,
                name: '',
                text: '',
            }))
            setRating(0)
        }
    }

    const [expanded, setExpanded] = React.useState<string | false>(false)

    const handleChange =
        (id: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? `${id}` : false)
        }

    return (
        <>
            <section className="reviews">
                <div className="reviews-cards">
                    <Typography variant="h4" textAlign="center" margin={3}>
                        Reviews
                    </Typography>
                    {reviews.map((review: Review, i: number) => (
                        <Accordion
                            expanded={expanded === `${i}`}
                            onChange={handleChange(i)}
                            key={i}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography
                                    sx={{ width: '33%', flexShrink: 0 }}
                                >
                                    {review.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{review.text}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
                <form onSubmit={onSend}>
                    <Card
                        variant="outlined"
                        style={{
                            maxWidth: 500,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h5"
                                marginBottom={4}
                                textAlign="center"
                            >
                                Please leave review
                            </Typography>
                            <div>
                                <Typography variant="h6">Name</Typography>
                                <TextField
                                    className="reviews-input"
                                    size="small"
                                    value={newReview.name}
                                    onChange={handleChangeName}
                                />
                            </div>
                            <br />
                            <div>
                                <Typography variant="h6">Review</Typography>
                                <TextareaAutosize
                                    className="reviews-texarea"
                                    minRows={5}
                                    value={newReview.text}
                                    onChange={handleChangeText}
                                    //cols={55}
                                />
                            </div>
                            <br />
                            <div>
                                <Typography variant="h6">Rate us</Typography>
                                <Rating
                                    rating={rating}
                                    onRating={(rate) => setRating(rate)}
                                    count={5}
                                    color={{
                                        filled: 'yellow',
                                        unfilled: 'black',
                                    }}
                                />
                            </div>
                            <br />
                            <div>
                                <Button variant="outlined" type="submit">
                                    Leave review
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </section>
        </>
    )
}

export default Reviews
