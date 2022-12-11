import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export type RateProps = {
    count: number
    rating: number
    color: {
        filled: string
        unfilled: string
    }
    onRating: (idx: number) => void
}

const Rating = ({ count, rating, color, onRating }: RateProps) => {
    const [hoverRating, setHoverRating] = useState(0)

    const getColor = (index: number) =>
        hoverRating >= index
            ? color.filled
            : !hoverRating && rating >= index
            ? color.filled
            : color.unfilled

    const starRender = useMemo(() => {
        return Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map((idx) => (
                <FontAwesomeIcon
                    key={idx}
                    className="coursor-pointer"
                    icon={faStar}
                    style={{ color: getColor(idx) }}
                    onClick={() => onRating(idx)}
                    onMouseEnter={() => setHoverRating(idx)}
                    onMouseLeave={() => setHoverRating(0)}
                />
            ))
    }, [count, rating, hoverRating])

    return <>{starRender}</>
}

export default Rating
