import React from 'react';
import "./FoodCard.style.css";
import aa from "../../photo/cheeseDongase.png"

const FoodCard = ({f, a}) => {
    // console.log(f.img);
    // let url = f.img;
    console.log(aa);
    return (
        <div className="food-card">
            <div>
                {f.foodName}
            </div>
            <img src={f?.img} alt="음식 사진X"/>
        </div>
    );
};


// /static/media/dongase1.e68e2658852b43c3c524.png

export default FoodCard;