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
    padding: 0 !important;
    border: 1px solid black;
    width: 100%;
    background-color: ${props => props.theme.styles.colorSecundario};


    .info-container{
        display: flex;
        height: 100%;


        .image-container{
            width: 30%;
            justify-self: flex-start;
            object-fit: cover;
        }

        .text-container{
            padding: 1rem;
            max-width: 60%;
            max-height: 90%;
            h2{
                font-size: 1.5rem;
            }

            h3{
                font-size: 1rem;
            }
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
        padding: 2rem 4rem;
        font-size: 1.2rem;
        margin: 2% auto;
        border: 1px solid black;
        background-color: ${props => props.theme.styles.colorSecundario};
`

