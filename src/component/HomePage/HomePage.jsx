import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./HomePage.style.css"
import TeachingCenter1F from "../Food/TeachingCenter1f";
import {useNavigate} from "react-router-dom";
import Slider from "../common/Slider";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Row>
                <Col lg={6} md={6} xs={12}>
                    <div className={'box'}>
                        <Row>
                            <Col lg={12} md={12} xs={12}>
                                <div>
                                    <div>
                                        <div className={"title"} onClick={() => {
                                            navigate("/")
                                        }}>
                                            교수회관 1층 메뉴
                                        </div>
                                        <div>
                                            <Slider where={"teaching_center_1f"}/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col lg={6} md={6} xs={12}>
                    <div className={'box'}>
                        <Row>
                            <Col>
                                <div className={"title"} onClick={() => {
                                    navigate("/")
                                }}>
                                    밀겨울 메뉴
                                </div>
                                <div>
                                    <Slider where={"meal_winter"}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} xs={12}>
                    <div className={'box'}>
                        <Row>
                            <Col>
                                <div className={"title"} onClick={() => {
                                    navigate("/")
                                }}>
                                    교수회관 2층 메뉴
                                </div>
                                <div>
                                    여기에 메뉴 카드 또는 글
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <div className="box">
                        <Row>
                            <Col>
                                <div className={"title"} onClick={() => {
                                    navigate("/")
                                }}>
                                    안골 메뉴
                                </div>
                                <div>
                                    여기에 메뉴 카드 또는 글
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default HomePage;