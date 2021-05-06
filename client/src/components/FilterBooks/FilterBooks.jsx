import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FitlerContainer } from './FilterBooks.styles'
import { useFetch } from '../../hooks/useFetch';


export const FilterBooks = () => {

    const [filter, setFilter] = useState([])

    /*  const [form, handleInputChange] = useForm({
 
     })
  */

    useEffect(() => {
        fetch("http://localhost:3001/books/filteringOptions")
            .then(data => data.json(data))
            .then(data => {
                setFilter(data)
            })
    }, [])


    const [author, minAndMax, years, genres] = !!filter && filter


    return (
        <FitlerContainer>
            <form action="">
                <Range
                    allowCross={false}
                    defaultValue={filter.length > 0 ? [minAndMax[0].min_price, minAndMax[0].max_price] : [20, 80]}
                />
                <label htmlFor="precio"></label>
                <input type="" />
            </form>
        </FitlerContainer>
    )
}
