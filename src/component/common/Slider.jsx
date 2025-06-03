import React from 'react';
import {responsive} from "../../constants/responsive";
import Carousel from "react-multi-carousel";
import FoodCard from "./FoodCard";
import {useFood} from "../../hooks/useFood";

const Slider = ({where}) => {

    const food = useFood(where);
    // let aaa = food?.[0]?.[where][0].img
    // console.log(food);
    return (
        <div style={{marginLeft: "5px", marginRight: "5px"}}>
            <Carousel
                infinite={true}
                centered={true}
                showDots={true}
                ssr={true}
                // customTransition="all .5"
                items={"movie-slider p1"}
                containerClass="carousel-container"
                responsive={responsive}
            >
                {food?.map((f,a) => (
                        <FoodCard f={f} num={a} w={where}/>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;