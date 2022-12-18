import { Card, CardMedia, CardContent, Typography } from "@mui/material"

interface ProductCardProps {
    name: string;
    description: string;
    image: string;
}

const ProductCard:React.FC<ProductCardProps> = ({
    name,
    description,
    image
}) => {
    return (
        <Card
            raised
            sx={{
                minWidth: 320,
                maxWidth: 480
            }}
        >
            <CardMedia
                component='img'
                height='360'
                image={image}
                alt={name}
                sx={{
                    objectFit: 'cover'
                }}
            />
            <CardContent>
            <Typography variant='h6' gutterBottom>
                { name }
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                { description }
            </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductCard;