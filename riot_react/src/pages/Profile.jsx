import { color } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProfilePage = () => {
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
    const [username, setUsername] = useState('John Doe');
    const [dateOfBirth, setDateOfBirth] = useState('20-09-1995')
    const [email, setEmail] = useState('admin@admin.com')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value); 
    }
    const handleDateOfBirthChange = (event) =>{
        setDateOfBirth(event.target.value);
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = () => {
        console.log("Password changed");
    };

    return (
        <div style={{ backgroundColor: "#111827", color: "white", textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", fontSize: "25px"  }}>
            <h1 style={{ fontSize: "36px", marginBottom: "5rem" }}>Hello User!</h1>
            <p style={{ marginBottom: "2rem" }}>
                Username: 
                <input type="text" value={username} onChange={handleUsernameChange} style={{ backgroundColor: "transparent", color: "white", border: "none", borderBottom: "1px solid white", textAlign: "center" }} />
            </p>
            <p style={{ marginBottom: "2rem" }}>
                Date of Birth: 
                <input type="text" value={dateOfBirth} onChange={handleDateOfBirthChange} style={{ backgroundColor: "transparent", color: "white", border: "none", borderBottom: "1px solid white", textAlign: "center" }} />
                </p>
            <p style={{ marginBottom: "2rem" }}>
                email: 
                <input type="text" value={email} onChange={handleEmailChange} style={{ backgroundColor: "transparent", color: "white", border: "none", borderBottom: "1px solid white", textAlign: "center" }} />
                </p>
            <p>
                {isPasswordModalOpen && (
                    <div>
                        <div>
                            <input type="password" placeholder="Enter new password" />
                        </div>
                        <div>
                            <input type="password" placeholder="Confirm new password" />
                        </div>
                        <button className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center' onClick={handlePasswordChange}>Change Password</button>
                        <button className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center' onClick={() => setPasswordModalOpen(false)}>Cancel</button>
                    </div>
                )}
                {!isPasswordModalOpen && (
                    <button className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center'
                        onClick={() => setPasswordModalOpen(true)}>
                        Change password
                    </button>
                )}
                </p>
            <Link to="/">
                <button
                    style={{ position: "absolute", left: "0", top: "0" }}
                    className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center'>
                    Back to Homepage
                </button>
            </Link>
        </div>
    );
};

export default ProfilePage;