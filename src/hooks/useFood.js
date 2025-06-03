import { useState, useEffect } from "react";

export const useFood = (str) => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            // let url = `https://my-json-server.typicode.com/SMG05oein/react_haksikdang/${str}`;
            let url = `http://localhost:5000/${str}`;
            let response = await fetch(url);
            let data = await response.json();
            setFood(data);
        };

        fetchUser();
    }, []);

    return food;
};
