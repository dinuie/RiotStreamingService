import React, {useEffect, useState} from 'react';
import logo from "./logo.svg";
import SearchBox from "./SearchBox";


function UserMainPage() {
    const [users, setGroups] = useState([]);

    return ( <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
    </header>
</div>)
}
export default UserMainPage;