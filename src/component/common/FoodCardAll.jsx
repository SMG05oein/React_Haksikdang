import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./FoodCardAll.style.css"
import FoodCard from "./FoodCard";
import {useFood} from "../../hooks/useFood";

const FoodCardAll = ({title}) => {

    let where;
    if(title==="교수회관 1층") {
        where = "teaching_center_1f"
    }
    else if(title==="밀겨울"){
        where = "meal_winter"
    }
    const food = useFood(where);

    console.log(food);
    if(food.length === 0){
        return <h1 className={"loading"}></h1>;
    }
    return (
        <Container className={"boxFood"}>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div>
                        <div className={"foodTitle"}>{title}</div>
                    </div>
                </Col>
            </Row>
            <Row style={{width:'100%'}}>
                <Col>
                    <Row className="justify-content-center">
                        {food?.map((f,a) => (
                            <Col lg={3} md={4} xs={10} sm={6}>
                                <FoodCard f={f} num={a} w={where} key={f.idx} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default FoodCardAll;