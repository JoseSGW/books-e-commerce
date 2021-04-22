import React, { useEffect, useState } from 'react'
import { Slider, SliderContainer } from './automaticSlider.styles'
import { images, blackImg } from "./imagesSlider"
 
export const AutomaticSlider = ({delay = 6000}) => {

    const [current, setCurrent] = useState(0);
    const length = images.length;

    useEffect(() => {
        setTimeout(
          () =>
          nextSlide(),
          delay
        );
        return () => {};
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
