import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { useContext } from 'react';
import { UserRecordContext } from '../../UserRecordContext';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail } from "firebase/auth";


function Login() {
  const [userRecord, setUserRecord] = useContext(UserRecordContext);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const auth = getAuth();

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/main',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'quirkmail.page.link'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        alert("Mail sent")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };

  return (
     <body className="bg-blue-2000" style={{ backgroundColor: '#061d39' }}>
    <div className="flex flex-col items-center justify-center h-screen">
  <h2 className="text-4xl font-semibold text-purple-600 mb-8 tracking-widest shadow-lg" style={{ letterSpacing: '0.3em', margin:'10px' }}>Quikrmail</h2>
  <form className="bg-blue-950 rounded-lg shadow-lg p-10 w-106" onSubmit={handleSubmit}>
  <div className="mb-4">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full h-12 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
      style={{ width: '200px' }}
    />
  </div>
 <div className="flex flex-col items-center mb-4 space-y-4">
  <button
    type="submit"
    disabled={loading}
    className="w-40 h-12 bg-cyan-200 text-bg-blue-1500 rounded-xl font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-primaryCyan focus:ring-opacity-50"
  >
    {loading ? 'Loading...' : 'Login'}
  </button>
  <p className="text-xs font-semibold text-white mb-8 shadow-lg" style={{ margin:'10px' ,textAlign:'center'}}>OR<br/>Not a Member,then Sign Up</p>
  <button
    type="button"
    className="w-40 h-12 bg-cyan-200 text-bg-blue-1500 rounded-xl font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-primaryCyan focus:ring-opacity-50"
  >
    Sign Up
  </button>
</div>
<footer className="flex justify-center mt-6">
  <img src="https://drive.google.com/uc?id=1FMx7tMoGwhM2woHgEeGN6BUWsjH65dBj" style={{ width: '100px', height: '100px' }} alt="" />
</footer>
<div className="flex justify-center mt-6">
  <a href="https://www.linkedin.com/company/automatiks/" className="mr-4">
    <FaLinkedin color="#01CEA5" size={"2rem"} />
  </a>
  <a href="https://twitter.com/Automatiks?t=6bqmDbqutbnp_SkuVm6K4Q&s=09">
    <FaTwitter color="#01CEA5" size={"2rem"} />
  </a>
</div>
</form>
</div>
</body>
  );
};

export default Login;
