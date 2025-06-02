import React from 'react';
import {useNavigate} from "react-router-dom";

const Test = () => {
    const navigate = useNavigate();
    return (
        <div>
            벡엔드 작업 확인을 위한 test공간 <br/>
            근데 일단 프론트 먼저 할 생각이라 이 공간은 사용 안 할 예정<br/>
            <button type={"button"} onClick={() => {
                navigate("/")
            }}>어디로든 문
            </button>
        </div>
    );
};

export default Test;