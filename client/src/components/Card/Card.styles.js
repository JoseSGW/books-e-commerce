import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
const { default: styled } = require("styled-components");


export const StyledCard = styled(Card)`
    display: flex;
    width: 400px;
    height: 200px;
    .img-cardActionMedia{
        width: 40%;
    }

    .info-container{
        width: 60%;
        padding: 10px;
    }

    .titles-container{
        height: 80%;
    }

    .option-container{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 20%;
        display: flex;
        gap: 4%;
    }

    .btn{
        padding: 3px;
        margin: 0;
    }
`

export const StyledCardActionArea = styled(CardActionArea)`
    margin: 0;
`

export const StyledCardMedia = styled(CardMedia)`
    height: 100%;
    width: 100%;
`

export const StyledCardContent = styled(CardContent)`

`

export const StyledTypography = styled(Typography)`
    
`