import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from "./pages/LoginForm"
import React from 'react';


function App() {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const handleLogin = async (user) => {
    //     try {
    //         const response = await axios.post('/login', user);
    //         const token = response.headers.authorization;
    //         localStorage.setItem('token', token);
    //         setIsAuthenticated(true);
    //     } catch (error) {
    //         // handle error
    //     }
    // }

    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     setIsAuthenticated(false);
    // }
    // const loadCurrentUser = () => {
    //     getCurrentUser()
    //         .then(response => {
    //             console.log(response)
    //         });
    // }
    //
    //
    // const handleLogin = () => {
    //
    //     loadCurrentUser();
    //     // console.log("this is userrrrrrrrrrr"+loadCurrentUser())
    //     // window.location.href("/");
    // }

    // render()
    // {
    //     // if (this.state.isLoading) {
    //     //     return <LoadingIndicator/>
    //     // }
    //     console.log(getCurrentUser() + "this is current user")
    //     if (!getCurrentUser()) {
    //         return <LoginForm/>
    //     }
        // console.log(getCurrentUser())
        return (
            <div className="lg:p-10  bg-zinc-900 bg-cover">
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/auth/register' element={<RegistrationForm />}/>
                    <Route path="/auth/login"
                           element={<LoginForm/>}/>
                </Routes>
            </div>
        );
    }


export default App;
