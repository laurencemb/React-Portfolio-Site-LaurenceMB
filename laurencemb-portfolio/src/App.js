import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectIndv from './pages/ProjectIndv';
import Contact from './pages/Contact'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper'; 

function App () {
return (
    <Router>
        <div>
            <Navbar />
             <Wrapper>
                 <Routes>
                    <Route path ='/' element = {<Home/>} />
                    <Route path ='/projects' element = {<Projects/>} />
                    <Route path ='/project' element = {<ProjectIndv/>} />
                    <Route path ='/contact' element = {<Contact/>} />
                </Routes> 
            </Wrapper>
            <Footer/>
        </div>
    </Router>
)
}

export default App;