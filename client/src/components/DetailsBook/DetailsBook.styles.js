import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';


export const GeneralContainer = styled.div`
    max-width: 1280px;
    margin: 2rem auto;

    @media only screen and (max-width: 1280px) {     
        max-width: 90vw;
    }
`

export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 400px;
    width: 100%;
    background-color: ${props => props.theme.styles.colorSecundario};


    .info-container{
        display: flex;
    }

    .image-container{
        width: 30%;
        padding: 1rem;
        
    }

    .text-container{
        padding: 1rem;
        max-width: 60%;
        h2{
            font-size: 2rem;
        }

        h3{
            font-size: 1rem;
        }
    }

    .option-container{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 3%;
    }
`

export const StyledTypography = styled(Typography)`
    
`

export const StyledCssBaseline = styled(CssBaseline)`
`


export const ResumeContainer = styled.section`
        padding: 1rem;
        font-size: 1.3rem;
        margin: 2% auto;
        border: 1px solid black;
        background-color: ${props => props.theme.styles.colorSecundario};
`

