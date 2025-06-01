import { useState, useEffect } from "react";

export const useUser = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            let url = `https://my-json-server.typicode.com/SMG05oein/react_haksikdang/user`;
            let response = await fetch(url);
            let data = await response.json();
            setUser(data);
        };

        fetchUser();
    }, []);

    return user;
};
