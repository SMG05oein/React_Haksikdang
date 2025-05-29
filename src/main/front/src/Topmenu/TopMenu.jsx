import React, {useState} from 'react';
import "./TopMenu.style.css"
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import BuLogo from "../BuLogo.png"
import { IoPersonCircleOutline } from "react-icons/io5";

const TopMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="top-menu">
            <Navbar expand="lg" className="bg-primary bg-gradient">
                <Container fluid>
                    <Navbar.Brand href="/"><img style={{width:'44px'}} src={BuLogo}/> 백석대 학식당 통합 예매 시스템</Navbar.Brand>
                    {/*<IoPersonCircleOutline style={{ width: "44", height: "44", marginLeft: "auto" }} />*/}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '1100px', width: '100%' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">홈으로</Nav.Link>
                            <Nav.Link href="/">교수회관</Nav.Link>
                            <Nav.Link href="/">밀겨울</Nav.Link>
                            <Nav.Link href="/">안골</Nav.Link>
                            <Nav.Link href="/devtest">DevTest</Nav.Link>

                            <NavDropdown
                                title={<IoPersonCircleOutline className="person-icon"/>}
                                // id="person-dropdown"
                                className="dropdown-person-icon"
                                show={showDropdown}
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <NavDropdown.Item href="/">로그인</NavDropdown.Item>
                                <NavDropdown.Item href="/">회원가입</NavDropdown.Item>
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