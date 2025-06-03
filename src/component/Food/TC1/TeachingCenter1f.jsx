import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../FoodCommon.style.css";
import {useNavigate} from "react-router-dom";

const TeachingCenter1F = ({auth}) => {
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
                        asd
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TeachingCenter1F;
