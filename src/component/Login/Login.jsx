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
        console.log(user)
        user?.map((u)=>{
            console.log("dasda",u.number);
            console.log("dasda",u.passwd);

            if(u.number != studentId || u.passwd != passwd){
                alert("학번 또는 비밀번호가 맞지 않습니다!!");
                return;
            }
            else{
                alert("홈으로");
                return;
            }
        })
        console.log("학번:", studentId);
        console.log("비밀번호:", passwd);
        // navigate("/");
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
