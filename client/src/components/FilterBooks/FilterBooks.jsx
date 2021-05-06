import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FitlerContainer } from './FilterBooks.styles'
import { useFetch } from '../../hooks/useFetch';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


export const FilterBooks = () => {

    const [filter, setFilter] = useState([])

    const [form, handleInputChange] = useForm({})


    useEffect(() => {
        fetch("http://localhost:3001/books/filteringOptions")
            .then(data => data.json(data))
            .then(data => {
                setFilter(data)
            })
    }, [])


    const [authors, minAndMax, years, genres] = !!filter && filter

    return (
        <FitlerContainer>
            <form action="">
                <label htmlFor="precio">Precio</label>
                <Range
                    allowCross={false}
                    defaultValue={filter.length > 0 ? [minAndMax[0].min_price, minAndMax[0].max_price] : [20, 800]}
                    min={filter.length > 0 ? minAndMax[0].min_price : 0}
                    max={filter.length > 0 ? minAndMax[0].max_price : 100}
                />

                <select name="authors" id="author">
                    {
                        authors?.map(author => <option value="volvo">{author.author}</option>)
                    }
                </select>

                <label htmlFor="years" type="text">Año</label>
                <select name="years" id="years">
                    {
                        years?.map(year => <option value="volvo">{year.year}</option>)
                    }
                </select>

                <label htmlFor="years" type="text">Generos</label>
                <select name="years" id="years">
                    {
                        genres?.map(genre => <option value="volvo">{genre.name}</option>)
                    }
                </select>
            </form>
        </FitlerContainer>
    )
}
