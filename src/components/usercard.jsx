// write the component code here
import React from 'react';

const Usercard = () => {

    const profilePhoto = "https://www.pexels.com/photo/puzzle-pieces-on-a-white-surface-8385821/";
    const name = "Naman Binu";
    const email = "namanbinu@gmail.com";
    const phone = "+91 234 567 8902";
    const address = "Pune, Maharashtra";
  
    return (
      <div className="border rounded-xl shadow-xl p-6 w-72 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-white"
        />
        <h2 className="text-2xl font-bold mt-3">{name}</h2>
        <p className="text-sm opacity-90">{phone}</p>
        <p className="text-sm opacity-90 mt-3 italic">{address}</p>
        <p className="text-sm opacity-90">{email}</p>
      </div>
    );
  };
  
  export default Usercard;