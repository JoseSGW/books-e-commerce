import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
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
            <FormControl action="" className="form-container">
                <fieldset>

                    <FormControl className="filter">
                        <InputLabel id="demo-simple-select-label" htmlFor="author">Autor</InputLabel>
                        <Select id="demo-simple-select-label" name="authors" id="author">
                            {
                                authors?.map(author => <MenuItem value="volvo">{author.author}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter">
                        <InputLabel htmlFor="years" type="text">Año</InputLabel>
                        <Select name="years" id="years">
                            {
                                years?.map(year => <MenuItem value="volvo">{year.year}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter">
                        <InputLabel htmlFor="genres" type="text">Generos</InputLabel>
                        <Select name="genres" id="genres">
                            {
                                genres?.map(genre => <MenuItem value="volvo">{genre.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter price-container">
                        <InputLabel htmlFor="precio">Precio entre</InputLabel>
                        <Range
                            allowCross={false}
                            defaultValue={filter.length > 0 ? [minAndMax[0].min_price, minAndMax[0].max_price] : [20, 800]}
                            min={filter.length > 0 ? minAndMax[0].min_price : 0}
                            max={filter.length > 0 ? minAndMax[0].max_price : 100}
                        />
                    </FormControl>
                    <Button className="btn-filtrar" variant="outlined">Filtrar</Button>
                </fieldset>
            </FormControl>
        </FitlerContainer>
    )
}
