import React from 'react';

const Test = ({hello}) => {
    return (
        <div>
            테스트: {hello}
            <button type={"button"} onClick={()=> {window.location.href = "/ss"}}>어디로든 문</button>
        </div>
    );
};

export default Test;