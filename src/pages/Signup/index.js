import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function Signup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiURL = `http://localhost:8080/signin/${email}`;

    try {
      const response = await axios.post(apiURL);
      alert('Account Created. Please Log In.');
      checkVerificationStatus(response.data);
    } catch (error) {
      console.error('Error during API call', error);
      alert('Error during sign up');
      setLoading(false);
    }
  };

  const checkVerificationStatus = (userRecord) => {
    history('/');
  };


  return (
    <div className="w-full mt-[100px]">
      <h2 className="text-4xl font-semibold text-purple-600 mb-2 tracking-widest">Quikrmail</h2>
      <form className="lg:w-[50%] md:w-[75%] mx-auto rounded-lg shadow-lg p-10" onSubmit={handleSubmit}>
        <div className='w-[60%] mx-auto'>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className='w-[20%] mx-auto'>
          <Button className='btn-outline-purple w-full mx-auto hover:bg-purple-600 outline-purple-600' disabled={loading} type='submit'>
            {loading ? 'Loading...' : 'Signup'}
          </Button>
        </div>
          
        <footer className="flex justify-center mt-2">
          <img src="https://drive.google.com/uc?id=1FMx7tMoGwhM2woHgEeGN6BUWsjH65dBj" alt="" width="200" height="200"/>
        </footer>
        <div className="text-center justify-center mx-auto flex flex-row">
          <Link to="https://www.linkedin.com/company/automatiks/">
            <FaLinkedin color="#01CEA5" size={"2rem"} />
          </Link>
          <Link to="https://twitter.com/Automatiks?t=6bqmDbqutbnp_SkuVm6K4Q&s=09">
            <FaTwitter color="#01CEA5" size={"2rem"} />
          </Link>
        </div>
  </form>
</div>
  );
};

export default Signup;
