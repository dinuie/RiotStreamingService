import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox'
import PasswordWriter from "./PasswordWriter";
import alert from "bootstrap/js/src/alert";
import data from "bootstrap/js/src/dom/data";

function App() {
    const [users, setGroups] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [searchPassValue, setSearchPassValue] = useState('')
    const element = document.getElementById('a')
    const password_element = document.getElementById('password')


    const getUserPasswordSearchBar = async (searchValue) => {
        console.log(searchValue)
        if (searchValue == users.map(users => users.userEmail || searchValue != null)) {
            fetch(`/api/users/${searchValue}`, {method: 'GET'}).then(response => response.json()).then(data => data.map(element.innerHTML = '<form  method="POST" ><input type="password"  placeholder="Enter Password" name="psw" required><br><button onclick={userMainPage} >Login</button></form>'));
            // if(users.map(users => users.userPassword)==)
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
                <div className="App-intro">
                    <SearchBox name="lname" searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <div id='a'>
                    </div>

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
