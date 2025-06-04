import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodCard.style.css';

const FoodCard = ({ f, w }) => {
  const navigate = useNavigate();

  return (
    <div
      className="food-card"
      style={{ '--bg': `url(${process.env.PUBLIC_URL}${f?.img})` }}
      onClick={() => navigate(`/food/${w}/${f.idx}`)}
    >
      <div className="info">
        <h3>{f.foodName}</h3>
        <p>{f.price.toLocaleString()}원 · {f.category}</p>
      </div>
    </div>
  );
};

export default FoodCard;
