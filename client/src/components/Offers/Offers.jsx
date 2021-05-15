import React from 'react'
//import { useFetch } from '../../hooks/useFetch'
import { SliderOffer } from './Offers.styles'
import center from "../../img/center.jpg"
import uno from "../../img/uno.jpg"
import dos from "../../img/dos.jpg"
import tres from "../../img/tres.jpg"


export const Offers = () => {

    //const { data, loading, error } = useFetch()
    //una vez que lleguen los productos con descuento reemplazar la data
    const dataTemp = [uno, center, dos, center, tres, center, uno, center]

    return (
        <SliderOffer>
            <div className="slide-track">

                {dataTemp.map(img =>
                    <div className="slide">
                        <img className="imgOffer" src={img} alt="ProductOffer"></img>
                    </div>
                )}
                 {dataTemp.map(img =>
                    <div className="slide">
                        <img className="imgOffer" src={img} alt="ProductOffer"></img>
                    </div>
                )}
            </div>
        </SliderOffer>
    )
}