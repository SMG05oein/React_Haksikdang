import React, {useEffect, useState} from 'react';
import {Button, Row, Col, Container, Dropdown} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import "./FoodView.style.css"
import {useFood} from "../../hooks/useFood";

const FoodView = ({auth, setBucket}) => {
    const {idx, food} = useParams()
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

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
                        <br/>
                        <Dropdown onSelect={(eventKey) => setQuantity(Number(eventKey))}>
                            <Dropdown.Toggle variant="outline-secondary">수량: {quantity}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {[...Array(9)].map((_, i) => (
                                    <Dropdown.Item key={i} eventKey={i + 1}>
                                        {i + 1}
                                    </Dropdown.Item>))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button
                            variant={"primary"} onClick={() => {
                            alert(`${quantity}개를 장바구니에 담았습니다.`)
                            setBucket(p => [...p, {idx, food, quantity,
                                img: f.img,foodName: f.foodName,price: f.price
                            }]);
                        }}>
                            담기
                        </Button>
                        {/*<Button variant="primary">담기</Button>*/}
                        <Button variant="outline-primary" onClick={() => navigate('/')}>홈으로</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FoodView;