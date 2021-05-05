import React from 'react'
import { useForm } from '../../hooks/useForm'
import { FitlerContainer } from './FilterBooks.styles'


export const FilterBooks = () => {

    const [form, handleInputChange] = useForm({

    })

    return (
        <FitlerContainer>
            <form action="">
                <label htmlFor="precio"></label>
                <input type=""/>
            </form>
        </FitlerContainer>
    )
}
