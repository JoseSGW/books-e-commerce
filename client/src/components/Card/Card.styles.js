import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
const { default: styled } = require("styled-components");


export const OwnCard = styled(Card)`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    width: 400px;
    height: 200px;

    .book-tittle{
        font-size: 1.2rem;
        font-weight: bold;
    }
`

export const CardImage = styled(CardMedia)`
    left: 0;
    width: 40%;
    height: 100%;
    object-fit: cover;
`

export const OwnCardContent = styled(CardContent)`
    width: 60%
`

export const CardInfo = styled(Typography)`
    
`