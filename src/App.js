import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Test from "./TestComponent/Test";
import NotFound from "./component/NotFound";
import TopMenu from "./Topmenu/TopMenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./component/HomePage/HomePage";
import {useUser} from "./hooks/useUser";
import {useFood} from "./hooks/useFood";

function App() {

    // const user = useUser();
    // const food = useFood();
    //
    // useEffect(() => {
    //     console.log(user);
    //     console.log(food);
    // })
    const [hello, setHello] = useState('');
//
    return (
        <Routes>
            <Route path={"/"} element={<TopMenu/>}>
                <Route index element={<HomePage/>}/>
            </Route>
            <Route path={"/devtest"} element={<Test hello={hello}/>}/>
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
    );
}

export default App;