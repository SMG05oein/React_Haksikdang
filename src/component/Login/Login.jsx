import React, {useRef, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import "./Login.style.css";
import {useUser} from "../../hooks/useUser";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [studentId, setStudentId] = useState("");
    const [passwd, setPasswd] = useState("");
    const studentIdRef = useRef(null);
    const passwdRef = useRef(null);
    const navigate = useNavigate();
    const user = useUser()

    // console.log(user[0]?.number);
    const handleSubmit = (event) => {
        event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        if(studentId === "") {
            alert("학번을 입력해주세요.");
            studentIdRef.current.focus();
            return;
        }
        if(passwd === "") {
            alert("비밀번호를 입력해주세요.");
            passwdRef.current.focus();
            return;
        }
        // console.log(user)
        // console.log(user.length);
        let check = false;
        for(let i = 0; i < user.length; i++){
            if(user[i].number != studentId || user[i].passwd != passwd){
                check = false;
            }else{
                check = true;
                // return;
            }
        }
        // console.log(check);
        if(check){
            alert("홈으로");
        }else{
            alert("학번 또는 비밀번호가 맞지 않습니다!!");
        }
        navigate("/");
    };

    return (
        <Container className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>학번</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="학번을 입력하세요"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        ref={studentIdRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="비밀번호"
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                        ref={passwdRef}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    확인
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
