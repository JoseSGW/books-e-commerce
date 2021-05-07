import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { FitlerContainer } from './FilterBooks.styles'
import { useDispatch } from 'react-redux';
import { setProductsByFilters, setProducts } from '../../actions/products';


export const FilterBooks = () => {

    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState(false)
    const [form, handleInputChange, setForm] = useForm({})

    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:3001/books/filteringOptions")
            .then(data => data.json(data))
            .then(data => {
                let { min_price, max_price } = data[1][0]
                console.log(min_price)
                setFilter([...data])
                setForm({ ...form, range: [min_price, max_price] })
                setLoading(true)
            })
    }, [])

    const [authors, minAndMax, years, genres] = !!filter && filter

    let { min_price, max_price } = loading && minAndMax[0]



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setProductsByFilters(form))
    }

    return (
        <FitlerContainer>
            <FormControl action="" className="form-container">
                <fieldset>

                    <FormControl className="filter">
                        <InputLabel htmlFor="author">Autor</InputLabel>
                        <Select defaultValue="" onChange={handleInputChange} name="author" id="author">
                            {
                                authors?.map(author => <MenuItem value={author.author}>{author.author}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter">
                        <InputLabel htmlFor="year" type="text">Año</InputLabel>
                        <Select defaultValue="" onChange={handleInputChange} name="year" id="year" defaultValue="">
                            {
                                years?.map(year => <MenuItem value={year.year}>{year.year}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter">
                        <InputLabel htmlFor="genre" type="text">Generos</InputLabel>
                        <Select defaultValue="" onChange={handleInputChange} name="genre" id="genre">
                            {
                                genres?.map(genre => <MenuItem value={genre.name}>{genre.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <FormControl className="filter price-container">
                        <Typography id="range-slider" gutterBottom>
                            Precio entre
                        </Typography>
                        <Slider
                            name="range"
                            value={loading && [form.range[0], form.range[1]]}
                            onChange={(e, val) => handleInputChange({ target: { name: "range", value: val } })}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            max={max_price}
                            min={min_price}
                        />
                    </FormControl>

                    <FormControl className="botones-de-filtro">
                        <Button onClick={() => dispatch(setProducts())} className="btn-limpiar" variant="outlined">Limpiar filtro</Button>
                        <Button onClick={handleSubmit} className="btn-filtrar" variant="outlined">Filtrar</Button>
                    </FormControl>

                </fieldset>
            </FormControl>
        </FitlerContainer>
    )
}
