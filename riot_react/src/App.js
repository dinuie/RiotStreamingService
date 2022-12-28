import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox'
import PasswordWriter from "./PasswordWriter";

function App() {
    const [users, setGroups] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [searchPassValue, setSearchPassValue] = useState('')
    const element = document.getElementById('a')

    const getUser = async (searchPassValue) => {
        console.log(searchPassValue)
    }
    const getUserPasswordSearchBar = async (searchValue) => {
        console.log(searchValue)
        if (searchValue == users.map(users => users.userEmail || searchValue != null)) {
            fetch(`/api/users/${searchValue}`, {method: 'GET'}).then(response => response.json()).then(data => data.map(element.innerHTML = '<input placeholder="Your password..."><br><button type="submit">Submit</button>'));
        } else {
            element.textContent = ''
        }
    }


    useEffect(() => {
        fetch('api/users')
            .then(response => response.json())
            .then(data => {
                getUserPasswordSearchBar(searchValue)
                setGroups(data);
            })
    }, [searchValue]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="App-intro">
                    <SearchBox name="lname" searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <div id='a'></div>

                    <h2>JUG List</h2>
                    {users.map(users =>
                        <div key={users.id}>
                            {users.userName}
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
