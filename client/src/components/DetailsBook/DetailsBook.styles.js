import styled from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


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


    .info-container{
        display: flex;
    }

    .image-container{
        width: 30%;
        padding: 1rem;
        
    }

    .text-container{
        padding: 1rem;
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
`

