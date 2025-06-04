import React, {useEffect} from 'react';
import {Button, Row, Col, Container} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import "./FoodView.style.css"
import {useFood} from "../../hooks/useFood";

const FoodView = ({auth}) => {
    const {idx, food} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if (auth === 0) {
            navigate("/login");
        }
    }, [auth, navigate]);

    const fd = useFood(food)
    const f = fd[idx-1]
    console.log(f)
    return (
        <Container className="food-detail-card">
          <Row className="g-3 align-items-center">
            <Col lg={5} md={6} xs={12}>
              <img src={`/${f?.img}`} alt={f?.foodName} className="food-detail-img"/>
            </Col>

            <Col lg={7} md={6} xs={12}>
              <h2 className="food-detail-title">{f?.foodName}</h2>
              <p className="food-detail-price">{f?.price?.toLocaleString()}원</p>
              <p className="food-detail-cat">{f?.category}</p>

              <div className="food-detail-btns">
                <Button variant="primary">담기</Button>
                <Button variant="outline-primary" onClick={() => navigate('/')}>홈으로</Button>
              </div>
            </Col>
          </Row>
        </Container>
    );
};

export default FoodView;