import React from 'react';

const Test = () => {
    return (
        <div>
            벡엔드 작업 확인을 위한 test공간 <br/>
            근데 일단 프론트 먼저 할 생각이라 이 공간은 사용 안 할 예정<br/>
            <button type={"button"} onClick={() => {
                window.location.href = "/"
            }}>어디로든 문
            </button>
        </div>
    );
};

export default Test;