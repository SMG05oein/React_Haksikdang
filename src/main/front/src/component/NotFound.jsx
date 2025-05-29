import React from 'react';

const NotFound = () => {
    return (
        <div>
            저 말인가요? 아니면 이말인가요? Not Found!!!!!!
            <button type={"button"} onClick={()=>{window.location.href="/"}}>홈으로</button>
        </div>
    );
};

export default NotFound;