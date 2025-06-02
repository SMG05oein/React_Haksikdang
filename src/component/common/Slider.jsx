import React from 'react';
import {responsive} from "../../constants/responsive";
import Carousel from "react-multi-carousel";
import FoodCard from "./FoodCard";
import {useFood} from "../../hooks/useFood";
import aa from "../../photo/gogumaDongase.png"

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
                {/*{[...Array(10)].map((_, a) => (*/}
                {/*    <div style={{height: "100px"}}>{a}*/}
                {/*        <img src={aaa} alt="음식 사진X"/>*/}
                {/*        <FoodCard/>*/}
                {/*    </div>*/}
                {/*))}*/}

                {food.map((f,a) => (
                        <FoodCard aa={aa} f={f} num={a}/>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;