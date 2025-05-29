import React from 'react';

const Test = () => {
    return (
        <div>
            벡엔드 작업 확인을 위한 test공간 <br/>
            근데 이친구는 스프링이 빌드되어야 원하는 결과 도출 <br/>
            <button type={"button"} onClick={() => {
                window.location.href = "/"
            }}>어디로든 문
            </button>
        </div>
    );
};

export default Test;