import React, { useEffect, useState } from 'react'
import { Slider, SliderContainer } from './automaticSlider.styles'
import { images } from "./imagesSlider"
 
export const AutomaticSlider = ({delay = 6000}) => {

    const [current, setCurrent] = useState(0);
    const length = images.length;

    useEffect(() => {
        const idTimeOut =setTimeout(
          () =>
          nextSlide(),
          delay
        );
        return () => clearTimeout(idTimeOut);
      }, [current]);

    const nextSlide = () => { //esta funcion solo esta en caso que se desee agregar botones iz y der
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    

    return (
        <SliderContainer>
            <Slider>
                {
                    images.map((img, index) =>
                    <div className={current === index ? 'active' : 'inactive'}>
                        {current === index && <img className="slide-img" src={img} alt="img" />}
                    </div>                     
                    )
                }  
            </Slider>
        </SliderContainer>
    )
}
