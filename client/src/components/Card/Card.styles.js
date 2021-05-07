import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
const { default: styled } = require("styled-components");


export const OwnCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    width: 200px;
    height: 300px;
`

export const CardImage = styled(CardMedia)`
    flex: 1 auto;
    img {
        object-fit: cover;
    }
`

export const OwnCardContent = styled(CardContent)`

`

export const CardInfo = styled(Typography)`
    flex: 1 auto;
`