import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
import './App.css'
export default function App() {
    return (
        <div>
            <Info />
            <About /> 
            <Interests />
            <Footer />
        </div>
    )
}