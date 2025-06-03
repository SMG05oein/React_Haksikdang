import React, {useEffect} from 'react';
import "../../common/FoodCardAll.style.css";
import {useNavigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import FoodCardAll from "../../common/FoodCardAll";

const MealWinter = ({auth}) => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (auth === 0) {
    //         navigate("/login");
    //     }
    // }, [auth]);

    return (
        <Container>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <FoodCardAll title={"밀겨울"}/>
                </Col>
            </Row>
        </Container>
    );
};

export default MealWinter;