import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./HomePage.style.css"

const HomePage = () => {
    return (
        <Container>
            <div className={'box'}>
                <Row>
                    <Col lg={6} md={6} xs={12}>
                        <div>
                            <div>
                                <div className={"title"} onClick={() => {window.location.href="/"}}>
                                    교수회관 1층 메뉴
                                </div>
                                <div>
                                    여기에 메뉴 카드
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col lg={6} md={6} xs={12}>
                        <div className={"title"} onClick={() => {window.location.href="/"}}>
                            교수회관 2층 메뉴
                        </div>
                        <div>
                            여기에 메뉴 카드 또는 글
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={'box'}>
                <Row>
                    <Col>
                        <div className={"title"} onClick={() => {window.location.href="/"}}>
                            밀겨울 메뉴
                        </div>
                        <div>
                            여기에 메뉴 카드
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="box">
                <Row>
                    <Col>
                        <div className={"title"} onClick={() => {window.location.href="/"}}>
                            안골 메뉴
                        </div>
                        <div>
                            여기에 메뉴 카드 또는 글
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default HomePage;