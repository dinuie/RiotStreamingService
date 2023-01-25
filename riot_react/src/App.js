import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from "./pages/LoginForm"
import React, {Component} from 'react';
import {notification} from 'antd';
import {getCurrentUser} from "./util/ApiUtils";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: true
        }
        // this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        notification.config({
            placement: 'topRight',
            top: 70,
            duration: 3,
        });
    }

    loadCurrentUser() {
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.loadCurrentUser();
    }

    handleLogin() {
        notification.success({
            message: 'Polling App',
            description: "You're successfully logged in.",
        });
        this.loadCurrentUser();
        this.props.history.push("/");
    }

    render() {
        //     if(this.state.isLoading) {
        //         return <h1 asteptati="true"/>
        //     }


        return (
            <div className="lg:p-10  bg-zinc-900 bg-cover">
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/auth/register' element={<RegistrationForm/>}/>
                    <Route path="/auth/login"
                           element={<LoginForm onLogin={this.handleLogin} {...this.props}/>}/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
