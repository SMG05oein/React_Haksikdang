import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodCard.style.css';
import {Button} from "react-bootstrap";

const FoodCard = ({k ,f, w, del}) => {
  const navigate = useNavigate();

  console.log("das",f);
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
                    <div className={"food-card-txt"}>이름: {f.foodName}</div>
                    <br/>
                    <img style={{maxWidth: '100%'}} src={`${process.env.PUBLIC_URL}${f?.img}`}/><br/>
                    <div className={"food-card-txt"}>가격: {f.price}원</div>
                    <div className={"food-card-txt"}>갯수: {f.quantity}개</div>
                    <div style={{marginBottom: "10px"}} className={"food-card-txt"}>총 가격: {f.price * f.quantity}원
                    </div>
                    <div className={"food-card-txt"}><Button variant={"outline-danger"}
                    onClick={() => {del(k)}}
                    >삭제</Button></div>
                    <br/>
                </div>
            </div>
        );
};

export default FoodCard;
