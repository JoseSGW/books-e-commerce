import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
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
                setFilter([...data])
                setForm({ ...form, range: [min_price, max_price] })
                setLoading(true)
            })
    }, [])

    useEffect(()=> {
        dispatch(setProductsByFilters(form))
    }, [form])

    const [authors, minAndMax, years, genres] = !!filter && filter

    let { min_price, max_price } = loading && minAndMax[0]



    /* const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setProductsByFilters(form))
    } */


    return (
        loading &&
        <FitlerContainer>
            <FormControl className="form-container">

                <FormControl className="filter">
                    <Autocomplete
                        className="maxHeight"
                        id="author-autocomplete"
                        options={authors && authors}
                        onChange={(e, val) => handleInputChange({ target: { name: "author", value: val ? val.author : "" } })} name="author"
                        getOptionLabel={(author) => author.author}
                        renderInput={(params) => <TextField {...params} label="Autor" variant="outlined" />}
                    />
                </FormControl>

                <FormControl className="filter">
                    <Autocomplete
                        className="maxHeight"
                        id="year-autocomplete"
                        options={years && years}
                        onChange={(e, val) => handleInputChange({ target: { name: "year", value: val ? parseInt(val.year) : "" } })} name="year"
                        getOptionLabel={(year) => year.year.toString()}
                        renderInput={(params) => <TextField {...params} label="Año" variant="outlined" />}
                    />
                </FormControl>

                <FormControl className="filter">
                    <Autocomplete
                        className="maxHeight"
                        id="genre-autocomplete"
                        options={genres && genres}
                        onChange={(e, val) => handleInputChange({ target: { name: "genre", value: val ? val.name : "" } })} name="genre"
                        getOptionLabel={(genre) => genre.name}
                        renderInput={(params) => <TextField {...params} label="Genero" variant="outlined" />}
                    />
                </FormControl>

                <FormControl className="filter price-container">
                    <Typography id="range-slider" gutterBottom className="maxHeight">
                        Precio entre
                    </Typography>
                    <Slider
                        className="maxHeight"
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
                    {/* <Button onClick={() => dispatch(setProducts())} className="btn-limpiar" variant="outlined">Limpiar filtro</Button> */}
                    {/* <Button onClick={handleSubmit} className="btn-filtrar" variant="outlined">Filtrar</Button> */}
                </FormControl>


            </FormControl>
        </FitlerContainer>
    )
}
