import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { SliderOffer } from './Offers.styles'
import center from "../../img/center.jpg"


export const Offers = () => {

    const { data, loading, error } = useFetch()

    const dataTemp = [center, center, center, center, center, center, center, center]

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