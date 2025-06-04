import React, {useEffect} from 'react';
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
    let i = 0;
    const sum = bucket?.reduce((acc, item) => {
        if (!item || !item.price || !item.quantity) return acc;
        return acc + item.price * item.quantity;
    }, 0) ?? 0;

    const del=(idx)=>{
        if(window.confirm("정말 삭제하시겠습니까?")){
            bucket[idx] = []
            alert("삭제되었습니다.")
        }else{
            alert("취소")
        }
    }

    return (
        <Container className="">
            <Row>
                <Col className={""}>
                    <div className="box">
                        <div className={"buTitle"}>장바구니</div>
                        {bucket?.map((item, i=0) => (
                            <Row>
                            {/*{bucket?.map((item, i=0) => (*/}
                                <Col lg={4} md={4} xs={10} sm={6}>
                                    {item.length === 0 ?
                                        <div></div>
                                        :
                                        <FoodCard k={i} f={item} w={9999} del={del}/>
                                    }
                                </Col>
                            {/*))}*/}
                        </Row>
                        ))}

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