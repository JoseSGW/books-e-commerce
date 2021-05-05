import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FitlerContainer } from './FilterBooks.styles'
import { useFetch } from '../../hooks/useFetch';


export const FilterBooks = () => {

    const [form, handleInputChange] = useForm({

    })

    const url = "http://localhost:3001/books/filteringOptions"
    const { data, loading, error } = useFetch(url)

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <FitlerContainer>
            <form action="">
                <Range
                    allowCross={false}
                    defaultValue={[20, 80]}
                />
                <label htmlFor="precio"></label>
                <input type="" />
            </form>
        </FitlerContainer>
    )
}
