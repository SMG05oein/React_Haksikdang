import React, {useEffect} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import "./Login.style.css"
import {useUser} from "../../hooks/useUser";

const Login = () => {
    const user = useUser()
    useEffect(() => {
        console.log("로그인 페이지", user);
    })
    return (
        <Container className="Login">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>학번</Form.Label>
                    <Form.Control type="text" placeholder="학번을 입력하세요" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    확인
                </Button>
            </Form>
        </Container>
    );
};

export default Login;