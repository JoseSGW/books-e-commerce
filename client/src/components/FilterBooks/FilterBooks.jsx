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
import { useDispatch } from 'react-redux';
import { setProductsByFilters } from '../../actions/products';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


export const FilterBooks = () => {

    const [filter, setFilter] = useState([])

    const dispatch =  useDispatch()

    useEffect(() => {
        fetch("http://localhost:3001/books/filteringOptions")
            .then(data => data.json(data))
            .then(data => {
                setFilter(data)
            })
    }, [])

    const [authors, minAndMax, years, genres] = !!filter && filter

    const [form, handleInputChange] = useForm({})

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setProductsByFilters(form))
    }

    return (
        <FitlerContainer>
            <FormControl action="" className="form-container">
                <fieldset>

                    <FormControl className="filter">
                        <InputLabel id="demo-simple-select-label" htmlFor="author">Autor</InputLabel>
                        <Select onChange={handleInputChange} id="demo-simple-select-label" name="author" id="author">
                            {
                                authors?.map(author => <MenuItem value={author.author}>{author.author}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter">
                        <InputLabel htmlFor="year" type="text">Año</InputLabel>
                        <Select onChange={handleInputChange} name="year" id="year">
                            {
                                years?.map(year => <MenuItem value={year.year}>{year.year}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter">
                        <InputLabel htmlFor="genre" type="text">Generos</InputLabel>
                        <Select onChange={handleInputChange} name="genre" id="genre">
                            {
                                genres?.map(genre => <MenuItem value={genre.name}>{genre.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter price-container">
                        <InputLabel htmlFor="precio">Precio entre</InputLabel>
                        <Range
                            allowCross={false}
                            defaultValue={[20, 800]}
                            min={filter.length > 0 ? minAndMax[0].min_price : 0}
                            max={filter.length > 0 ? minAndMax[0].max_price : 100}
                            onAfterChange={(e) => handleInputChange({ target: { name: "range", value: e } })}

                        />
                    </FormControl>
                    <Button onClick={handleSubmit} className="btn-filtrar" variant="outlined">Filtrar</Button>
                </fieldset>
            </FormControl>
        </FitlerContainer>
    )
}
