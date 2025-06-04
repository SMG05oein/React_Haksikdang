import React, { useState } from 'react';
import "./TopMenu.style.css";
import { Container, Nav, Navbar, NavDropdown, Button, Modal, Card, ListGroup, Badge } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import BuLogo from "../BuLogo.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaUtensils, FaCalendarAlt, FaClock, FaBuilding } from "react-icons/fa";

const TopMenu = ({ auth, setAuth }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [qrData, setQrData] = useState("");

  const navigate = useNavigate();

  const handleShow = () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    setQrData(randomString);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="top-menu">
      <Navbar expand="lg" className="bg-primary bg-gradient">
        <Container fluid>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: 'pointer', display: "flex", alignItems: "center" }}
          >
            <img style={{ width: '44px' }} src={BuLogo} alt="백석대학교 로고" />
            <div className={"TMtitle"}>백석대 학식당 통합 예매 시스템</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '1100px', width: '100%', alignItems: 'center' }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate("/")}>홈으로</Nav.Link>
              <Nav.Link onClick={() => navigate("tc1")}>교수회관 1층</Nav.Link>
              <Nav.Link onClick={() => navigate("/")}>교수회관 2층</Nav.Link>
              <Nav.Link onClick={() => navigate("mw")}>밀겨울</Nav.Link>
              <Nav.Link onClick={() => navigate("/")}>안골</Nav.Link>
              <Nav.Link onClick={() => navigate("/devtest")}>DevTest</Nav.Link>

              <NavDropdown
                title={<IoPersonCircleOutline className="person-icon" />}
                className="dropdown-person-icon"
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                {auth === 0 ? (
                  <div>
                    <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => alert("기능 구현 중...")}>회원가입</NavDropdown.Item>
                  </div>
                ) : (
                  <div>
                    <NavDropdown.Item>{auth === 1 ? "학생 계정입니다." : "관리자 계정입니다"}</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleShow}>예약확인</NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        if (window.confirm("로그아웃을 하시겠습니까?")) {
                          setAuth(0);
                          alert("로그아웃 되었습니다!!");
                        }
                      }}
                    >
                      로그아웃
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => alert("기능 구현 중...")}>내 설정</NavDropdown.Item>
                  </div>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 예약확인 모달 */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>예약 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center">
            <Card.Body>
              <Card.Title><strong>홍길동 님의 예약 정보</strong></Card.Title>
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item><FaCalendarAlt /> 날짜: 2025-06-05 (목)</ListGroup.Item>
                <ListGroup.Item><FaClock /> 시간대: 점심</ListGroup.Item>
                <ListGroup.Item><FaBuilding /> 장소: 교수회관 1층</ListGroup.Item>
                <ListGroup.Item><FaUtensils /> 메뉴: 제육볶음, 김치찌개</ListGroup.Item>
              </ListGroup>

              <div>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrData)}`}
                  alt="예약 QR 코드"
                  style={{ margin: "0 auto", display: "block", maxWidth: "180px" }}
                />
                <p className="mt-3 fw-bold text-danger">📱 입장 시 QR을 확인해 주세요</p>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>

      <Outlet />
    </div>
  );
};

export default TopMenu;
