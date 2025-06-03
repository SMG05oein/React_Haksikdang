import React, {useEffect} from 'react';
import "../FoodCommon.style.css";
import {useNavigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

const MealWinter = ({auth}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (auth === 0) {
            navigate("/login");
        }
    }, [auth]);

    return (
        <Container>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className="boxFood">
                        밀겨울
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MealWinter;