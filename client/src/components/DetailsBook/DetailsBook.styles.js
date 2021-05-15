import styled from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export const GeneralContainer = styled.div`
    max-width: 90vw;
    margin: 0 auto;
`

export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    background-color: yellowgreen;
    width: 100%;
    height: 500px;

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
            font-size: 1.3rem;
        }
    }

`
export const StyledTypography = styled(Typography)`
    
`

export const StyledCssBaseline = styled(CssBaseline)`
    
`

export const ResumeContainer = styled.section`
        background-color: khaki;
        padding: 1rem;
        width: 100%;
        font-size: 1.3rem;
        margin: 2% auto;
`

