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
import Login from "./component/Login/Login";
import TeachingCenter1F from "./component/Food/TC1/TeachingCenter1f";
import MealWinter from "./component/Food/MW/mealWinter";
import FoodView from "./component/common/FoodView";
import Bucket from "./component/common/Bucket";

function App() {

    const [auth, setAuth] = useState(0);
    const [bucket, setBucket] = useState([]);
    // const user = useUser();
    // const food = useFood();
    //
    // useEffect(() => {
    //     console.log(user);
    //     console.log(food);
    // })
    const [hello, setHello] = useState('');

    return (
        <Routes>
            <Route path={"/"} element={<TopMenu auth={auth} setAuth={setAuth} bucket={bucket} />}>
                <Route index element={<HomePage/>}/>
                <Route path={"/login"} element={<Login setAuth={setAuth} />}/>
                <Route path={"/tc1"} element={<TeachingCenter1F auth={auth}/>}/>
                <Route path={"/mw"} element={<MealWinter auth={auth}/>}/>
                <Route path={"food/:food/:idx"} element={<FoodView auth={auth} setBucket={setBucket} />}/>
                <Route path={"/bucket"} element={<Bucket auth={auth} bucket={bucket} />}/>
            </Route>
            <Route path={"/devtest"} element={<Test hello={hello}/>}/>
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
    );
}

export default App;