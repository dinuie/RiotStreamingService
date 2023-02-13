import { color } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProfilePage = () => {
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
    const [aboutMeText, setAboutMeText] = useState('');
    const [showAboutMeInput, setShowAboutMeInput] = useState(false);

    const handleAboutMeTextChange = (event) => {
        setAboutMeText(event.target.value);
    };

    const handleAboutMeKeyPress = (event) => {
        if (event.key === 'Enter') {
            setShowAboutMeInput(false);
        }
    };

    const handlePasswordChange = () => {
        console.log("Password changed");
    };

    return (
        <div style={{ backgroundColor: "#111827", color: "white", textAlign: "center" }}>
            <h1>Hello User !</h1>
            <p>Username: John Doe</p>
            <p>Date of Birth: 20-09-1995</p>
            <p>email: admin@admin.com</p>
            <p>About Me:</p>
            <p>
                {showAboutMeInput ? (
                    <input
                        type="text"
                        value={aboutMeText}
                        onChange={handleAboutMeTextChange}
                        onKeyPress={handleAboutMeKeyPress}
                        style={{ color: "black" }}
                    />
                ) : (
                    <div className='flex justify-center px-5 py-5'>
                        <p className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm text-center px-5 py-5'
                            onClick={() => setShowAboutMeInput(true)} >
                            {aboutMeText || 'Click to add a description'}
                        </p>
                    </div>
                )}
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