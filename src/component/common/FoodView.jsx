import React, {useEffect} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
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
    }, [auth]);

    const fd = useFood(food)
    const f = fd[idx-1]
    console.log(f)
    return (
        <Container className="food_container justify-content-center">
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className="">
                        <Row>
                            <Col lg={4} md={4} xs={12}>
                                <img src={`/${f?.img}`} alt="음식 사진"/>
                            </Col>
                            <Col lg={6} md={6} xs={12}>
                                <div style={{marginLeft: '20px'}}>
                                    이름: {f?.foodName}<br/>
                                    가격: {f?.price}원 <br/>
                                    카테고리: {f?.category}
                                    <br/>
                                    <Button variant={"primary"} style={{marginRight:'10px'}}>담기</Button>
                                    <Button variant={"outline-primary"} onClick={()=>{navigate('/')}}>홈으로</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FoodView;