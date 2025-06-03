import React, {useState} from 'react';
import "./TopMenu.style.css"
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import BuLogo from "../BuLogo.png"
import { IoPersonCircleOutline } from "react-icons/io5";

const TopMenu = ({auth, setAuth}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="top-menu">
            <Navbar expand="lg" className="bg-primary bg-gradient">
                <Container fluid>
                    <Navbar.Brand onClick={() => {navigate("/")}} style={{cursor:'pointer', display:"flex"}}><img style={{width:'44px'}} src={BuLogo}/>
                        <div className={"TMtitle"}>백석대 학식당 통합 예매 시스템</div>
                    </Navbar.Brand>
                    {/*<IoPersonCircleOutline style={{ width: "44", height: "44", marginLeft: "auto" }} />*/}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '1100px', width: '100%' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => {navigate("/")}}>홈으로</Nav.Link>
                            <Nav.Link onClick={() => {navigate("tc1")}}>교수회관 1층</Nav.Link>
                            <Nav.Link onClick={() => {navigate("/")}}>교수회관 2층</Nav.Link>
                            <Nav.Link onClick={() => {navigate("mw")}}>밀겨울</Nav.Link>
                            <Nav.Link onClick={() => {navigate("/")}}>안골</Nav.Link>
                            <Nav.Link onClick={() => {navigate("/devtest")}}>DevTest</Nav.Link>

                            <NavDropdown
                                title={<IoPersonCircleOutline className="person-icon"/>}
                                // id="person-dropdown"
                                className="dropdown-person-icon"
                                show={showDropdown}
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                {auth === 0 ?
                                    (
                                        <div>
                                            <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
                                            <NavDropdown.Item onClick={()=>alert("기능 구현 중...")}>회원가입</NavDropdown.Item>
                                        </div>
                                    ):
                                    (
                                        <div>
                                            <NavDropdown.Item>{auth === 1 ? "학생 계정입니다." : "관리자 계정입니다"}</NavDropdown.Item>
                                            <NavDropdown.Item onClick={()=>{
                                                if(window.confirm("로그아웃을 하시겠습니까?")){
                                                    setAuth(0);
                                                    alert("로그아웃 되었습니다!!");
                                                }else{return;}
                                            }}>로그아웃</NavDropdown.Item>
                                            <NavDropdown.Item onClick={()=>alert("기능 구현 중...")}>내 설정</NavDropdown.Item>
                                        </div>
                                    )
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    );
};

export default TopMenu;