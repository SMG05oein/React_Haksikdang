import { useState, useEffect } from "react";

export const useFood = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            let url = `https://my-json-server.typicode.com/SMG05oein/react_haksikdang/food`;
            let response = await fetch(url);
            let data = await response.json();
            setFood(data);
        };

        fetchUser();
    }, []);

    return food;
};
