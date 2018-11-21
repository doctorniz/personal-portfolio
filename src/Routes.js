import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router'
import Hero from './pages/Hero'
import Contact from './pages/Contact'
import Bio from './pages/Bio'
import NavBar from './components/NavBar'
import './App.css';

const links = [
    {text: "Doctor",
    link: "/doctor"},
    {text: "Developer",
    link: "/developer"},
    {text: "Contact",
    link: "/contact",
    page: "Contact" }
]

export default () => {
    const [currentPage, setCurrentPage] = useState("Hero")
    useEffect(() => {
        const element= document.querySelector(`#${currentPage}`)
        if(element) element.scrollIntoView('smooth')
    })
    return <div>
        <NavBar links={links} brand="nizarismail.com" setCurrentPage={setCurrentPage} />
        <Hero />
        
        <Switch>
            <Route exact path="/" render={()=><Bio bioType="ALL" />} />
            <Route path="/doctor" render={()=><Bio bioType="MED" />} />
            <Route path="/developer" render={()=><Bio bioType="IT" />} />
        </Switch>

        <Contact />
    </div>
}