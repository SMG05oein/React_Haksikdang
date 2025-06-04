import React from 'react';
import {useFood} from "../../hooks/useFood";
import {Button, Col, Container, Row} from "react-bootstrap";
import "./Bucket.style.css"
import FoodCard from "./FoodCard";
import {useNavigate} from "react-router-dom";

const Bucket = ({auth, bucket}) => {
    const kindOfFood = ["teaching_center_1f", "meal_winter"];
    const navigate = useNavigate();
    let food = new Array([[]]);

    console.log("ㅠㅠㅠㅠ",bucket);

    var sum = 0;
    sum = bucket?.reduce((acc, item) => acc + parseInt(item.price*item.quantity, 10), 0) ?? 0;

    return (
        <Container className="">
            <Row>
                <Col className={""}>
                    <div className="box">
                        <div className={"buTitle"}>장바구니</div>
                        <Row>
                            {bucket?.map((item) => (
                                <Col lg={4} md={4} xs={10} sm={6}>
                                    <FoodCard f={item} w={9999} />
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <div className="bucketBtn">
                                <div>총 가격: {sum}원</div>
                                <div className="buttonGroup">
                                    <Button variant="primary" onClick={() => alert("주문 되었습니다!")}>주문</Button>
                                    <Button variant="outline-primary" onClick={() => navigate("/")}>홈으로</Button>
                                </div>
                            </div>
                        </Row>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Bucket;