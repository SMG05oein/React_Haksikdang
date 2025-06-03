import React from 'react';
import "./FoodCard.style.css";
import {useNavigate} from "react-router-dom";
// import aa from `${process.env.PUBLIC_URL}/photo/MW/mandu.png`

const FoodCard = ({f, w}) => {
    // console.log(f.img);
    // let url = f.img;
    // console.log(aa);

    const navigate = useNavigate();
    return (
        <div className="food-card"
        onClick={() => {navigate(`/food/${w}/${f?.idx}`)}}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${f?.img})` }}
        >
            {/*<img src={`${process.env.PUBLIC_URL}`+f?.img} alt="음식 사진X"/>*/}
            <div className="food-card-content">
                이름: {f.foodName}<br/>
                가격: {f.price}원 <br/>
                카테고리: {f.category}
            </div>
        </div>
    );
};

export default FoodCard;