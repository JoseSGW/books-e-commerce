import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { PurchaseButtons } from '../PurchaseButtons/PurchaseButtons'
import { StyledContainer, ResumeContainer, GeneralContainer } from './DetailsBook.styles'
const genericUrl = "https://www.julianmarquina.es/wp-content/uploads/Para-efecto-legales-un-libro-es-todo-impreso-no-periodico-que-contiene-49-paginas-o-mas.jpg"



export const DetailsBook = () => {

    const [book, setBook] = useState({})
    const [isLoad, setIsLoad] = useState(false)
    const { location } = useHistory()
    const idProduct = parseInt(location.pathname.split("/")[2]);

    useEffect(() => {
        fetch(`http://localhost:3001/books/getBookById/${idProduct}`)
            .then(response => response.json())
            .then(data => {
                setBook(data)
                setIsLoad(true)
            })
        return () => setIsLoad(false)
    }, [])

    const { id, author, discount, editorial, genres, images, name, price, resume, stock, year } = book;

    return (
        <GeneralContainer className="general-container">
            <StyledContainer className="title-container">
                <div className="info-container">
                    <div className="image-container">
                        <img src={isLoad && images[0] ? images[0].url : genericUrl} alt="book" />
                    </div>

                    <div className="text-container">
                        <h2>{name}</h2>
                        <h3>{author}</h3>
                        <h3>{year}</h3>
                        <h3>{editorial}</h3>
                        <h2>Precio: {price}</h2>
                        <PurchaseButtons className="botones-opciones" product={{ id, name, price, images, amount: 1 }} />
                    </div>

                </div>

            </StyledContainer>

            <ResumeContainer className="resume-container">
                <h2>Resumen</h2>
                <p>{resume}</p>
            </ResumeContainer>
        </GeneralContainer>
    )
}
