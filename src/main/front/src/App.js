import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Test from "./TestComponent/Test";
import NotFound from "./component/NotFound";

function App() {

  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/api/test')
        .then((res) => {
          setHello(res.data);
        })
  }, []);

  return (
    <Routes>
        <Route path={"/"} element={<Test hello={hello}/>}/>
        <Route path={"*"} element={<NotFound/>}/>
    </Routes>
  );
}

export default App;