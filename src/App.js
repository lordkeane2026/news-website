import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListArticleComponent from './components/ListArticleComponent';
import LoginComponent from "./components/LoginComponent";
import ListLogComponent from "./components/ListLogComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div >
            <Router>
                    <HeaderComponent/>
                    <div className='container' style={{margin:'1%'}}>
                        <Routes>
                            <Route exact path="/" element={<ListArticleComponent/>}></Route>
                            <Route path="/home" element={<ListArticleComponent/>}></Route>
                            <Route path="/login" element={<LoginComponent/>}></Route>
                            <Route path="/log" element={<ListLogComponent/>}></Route>
                        </Routes>
                            {/*<ListArticleComponent/>*/}
                    </div>
                    {/* <FooterComponent /> */}
            </Router>
        </div>
    );
}

export default App;
