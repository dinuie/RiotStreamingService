import { color } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div style ={{backgroundColor: "#111827" , color:"white", textAlign: "center"}}>
      <h1>Hello User !</h1>
      <p>Username: John Doe</p>
      <p>Date of Birth: 20-09-1995</p>
      <p>email: admin@admin.com</p>
      <p>About Me: </p>
      <p>Change password:</p>
      <Link to="/">
      <button className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center'>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
