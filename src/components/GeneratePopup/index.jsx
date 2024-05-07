import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import { FaTimes } from 'react-icons/fa';


function GeneratePopup({ changer, isOpen, setter, handleTextareaBlur, id }) {
  const [prompt, setPrompt] = useState("");
  console.log(changer);

  function setText(e) {
    if (prompt === "") return;

    const body = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": `${prompt}` }],
      max_tokens: 256
    };
    
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API}`
    };

    axios.post("https://api.openai.com/v1/chat/completions", body, { headers: headers })
      .then(res => {
        const data = res.data;
        const generated = data.choices[0].message.content;
        setter(generated);
        changer(generated, id);
        handleTextareaBlur();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <div className={isOpen ? '' : 'invisible h-0'}>
      <div className="z-10 inline-flex justify-end mr-10">
      <Popup
        trigger={
          <a href="#" className="h-16 w-16 bg-gray-500 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-full inline-flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </a>        
        }
        position={['bottom', 'right']}
        modal
        closeOnDocumentClick
      >
      <div className="relative details-section rounded-tr-lg rounded-br-lg rounded-bl-lg p-[1px] bg-blue-100 border-2 border-gray-900">
        <div className="absolute top-0 right-0">
          <FaTimes className="text-gray-900 text-2xl m-2 cursor-pointer" closeOnDocumentClick />
        </div>
        <div className="popup-content" style={{ margin: '10px', padding: '20px' }}>
          <div>
            <textarea
              className="textarea"
              rows="2"
              cols="30"
              placeholder="Write your prompt here"
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button className="btn btn-outline-dark bg-black text-white items-center" onClick={setText}>
              Generate
            </Button>
          </div>
        </div>
      </div>
    </Popup>
  </div>
</div>
    </>
  );
}

export default GeneratePopup;
