import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { StyledContainer } from './DetailsBook.styles'


export const DetailsBook = ({ id, name, year, author, editorial, images, price, resume, stock }) => {

    const [book, setBook] = useState({})
    const { location } = useHistory()
    const idProduct = parseInt(location.pathname.split("/")[2]);

    useEffect(() => {
        fetch(`http://localhost:3001/books/getBookById/${idProduct}`)
            .then(response => response.json(response))
            .then(data => {
                console.log("soy la data", data)
                setBook(data)
            })

    }, [])

    return (
        <StyledContainer>
            {console.log(book)}
        </StyledContainer>
    )
}
