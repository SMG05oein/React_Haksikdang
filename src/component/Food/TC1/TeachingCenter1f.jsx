import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../common/FoodCardAll.style.css";
import {useNavigate} from "react-router-dom";
import FoodCardAll from "../../common/FoodCardAll";

const TeachingCenter1F = ({auth}) => {
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
                    <FoodCardAll title={"교수회관 1층"}/>
                </Col>
            </Row>
        </Container>
    );
};

export default TeachingCenter1F;
