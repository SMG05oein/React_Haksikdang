import React from 'react';

const NotFound = () => {
    return (
        <div>
            Not Found!!!!!!
            <button type={"button"} onClick={()=>{window.location.href="/"}}>홈으로</button>
        </div>
    );
};

export default NotFound;