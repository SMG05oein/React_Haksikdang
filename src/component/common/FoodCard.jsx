import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodCard.style.css';

const FoodCard = ({f, w}) => {
  const navigate = useNavigate();


  console.log(f);
  return w !== 9999 ? (
          <div
              className="food-card"
              style={{'--bg': `url(${process.env.PUBLIC_URL}${f?.img})`}}
              onClick={() => navigate(`/food/${w}/${f.idx}`)}
          >
            <div className="info">
              <h3>{f.foodName}</h3>
              <p>{f.price.toLocaleString()}원 · {f.category}</p>
            </div>
          </div>
      ) :
      (
          <div className={"food-card2"}>
            <div>
              <div className={"food-card-txt"}>이름: {f.foodName}</div><br/>
              <img style={{maxWidth:'100%'}} src={`${process.env.PUBLIC_URL}${f?.img}`}/><br/>
              <div className={"food-card-txt"}>가격: {f.price}원</div>
              <div className={"food-card-txt"}>갯수: {f.quantity}개</div>
              <div className={"food-card-txt"}>총 가격: {f.price * f.quantity}원</div>
              <hr style={{display: 'none'}}/>
            </div>
          </div>
      )
};

export default FoodCard;
