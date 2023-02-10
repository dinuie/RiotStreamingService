import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import React, {useEffect} from "react";
import Watch from "./pages/Watch";
import ifCurrentUser from "./components/useCurrentUser";
import {navigate} from "@reach/router";


function App() {
    const isLoggedIn = ifCurrentUser();
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);
    return (
        <div className="lg:p-0  bg-zinc-900 bg-cover">
            {isLoggedIn ? (<Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/watch/:id" element={<Watch/>}/>
            </Routes>) : (<>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth/register" element={<RegistrationForm/>}/>
                    <Route path="/auth/login" element={<LoginForm/>}/>
                    <Route path="/watch/:id" element={<Watch/>}/>
                </Routes></>)})
        </div>
    )
}

export default App;
