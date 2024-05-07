import React, {useState} from "react";
//import {Link} from "react-router-dom";
import GeneratePopup from "../../components/GeneratePopup";

function ShoeBrand(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleTextareaFocus = () => {
    setIsEditing(true);
  };

  const handleTextareaBlur = () => {
    setIsEditing(false);
  };

  const changeValue = (text,id) => {
    document.getElementById(id).value = text;
    console.log(text);
  }
    return (
        <>
    <table className="container max-w-full mx-auto" role="presentation">
  <tr>
  <td className="text-center bg-white">
  <div className="flex justify-center">
    <img
      src="https://drive.google.com/uc?id=1a0l1WVDFad0gbemlNbjHyNBAyAlxHCG_"
      alt=""
      className="max-w-full h-auto rounded-5"
    />
  </div>
</td>
  </tr>
  <tr>
    <td className="bg-rose-800">
      <h2 className="text-white text-4xl text-center font-bold py-4 font-poppins-medium">Step into FunkSole - Your Perfect Sole Mate Awaits</h2>
    </td>
  </tr>
  <tr>
    <td className="bg-rose-800 border border-rose-800">
    <textarea
  id="editableText"
  contentEditable="true"
  rows="4"
  className="w-full h-full text-2xl text-white text-center font-poppins-medium bg-rose-800 border-rose-800 resize-none"
  onFocus={handleTextareaFocus}
  onChange={(e) => props.changebrandHeader(e.target.value)}>{props.brand}</textarea>
  {isEditing && (
            <GeneratePopup
            changer={changeValue}
            isOpen={isEditing}
            setter={props.setbrandHeader}
            careerheader={props.brandheader}
            handleTextareaBlur={handleTextareaBlur}
            id="editableText1"
            style={{
                position: 'absolute',
                top: '0',
                right: '0',
                transform: 'translate(50%, -50%)',
            }}
            />
          )}
    </td>
  </tr>
  <tr>
    <td className="text-center bg-gradient-to-b from-rose-800 via-white to-white bg-contain bg-no-repeat">
      <img src="https://drive.google.com/uc?id=1APfGKHxQMuqSInkPdhbJIpEwGztVXjd3" alt="" className="max-w-100 mx-auto h-auto" />
    </td>
  </tr>
  <tr>
    <td className="flex justify-center items-center">
      <a href="https://drive.google.com/file/d/1aT4M75UoTNuUC7mBcedqpCdtjxtjXOrV/view?usp=drive_link" className="text-decoration-none justify-center">
        <button className="btn px-14 py-4 border-0 rounded-0 text-white bg-rose-800 border-rose-800 text-2xl my-10">Order Now</button>
      </a>
    </td>
  </tr>
  <tr>
    <td className="bg-white p-5">
      <textarea
        id="editableText"
        contentEditable="true"
        rows="4"
        className="w-100 text-4xl text-center text-justify font-bold font-poppins-medium text-rose-800 bg-white border-none resize-none"
        onChange={(e) => props.changeDescription(e.target.value)}>{props.description}</textarea>
    </td>
  </tr>
  <tr>
    <td>
    <table className="w-full" align="center" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td className="text-center">
      <img
        src="https://drive.google.com/uc?id=1Aac0xokrQAEj9l1sIhBaWwSzu0KS9VVT"
        alt=""
        className="mx-auto max-w-full h-auto mb-10"
      />
    </td>
  </tr>
  <tr>
    <td className="text-center">
      <img
        src="https://drive.google.com/uc?id=1usd1Q1NUswGOqstiDwAMdIY-KI4uAZOQ"
        alt=""
        className="mx-auto max-w-full h-auto mb-10"
      />
    </td>
  </tr>
  <tr>
    <td className="text-center">
      <img
        src="https://drive.google.com/uc?id=1Pc_Q5f4-kTrtVZQJPZCJRhDN5vIm7vmB"
        alt=""
        className="mx-auto max-w-full h-auto mb-10"
      />
    </td>
  </tr>
</table>
    </td>
  </tr>
  <tr>
  <td className="text-center bg-white">
    <div className="flex justify-center">
      <img
        src="https://drive.google.com/uc?id=1yuWEysdeKk8cLIQTF-DjLb7wmJ3tWZXB"
        alt=""
        className="w-300 h-auto rounded-20"
      />
    </div>
  </td>
</tr>
  <tr>
    <td className="bg-rose-800 p-5 border border-gray-300 rounded-5">
      <textarea
        id="editableText"
        contentEditable="true"
        rows="4"
        className="w-100 text-2xl text-white text-center mx-auto font-poppins-medium bg-rose-800 border-none resize-none my-2"onChange={(e) => props.changeFooter(e.target.value)}>{props.footer}</textarea>
    </td>
  </tr>
</table>
<div className="button text-center">
  <a href="https://automatiks.in/" className="no-underline justify-center">
    <button className="btn py-8 px-20 text-white bg-rose-800 text-2xl my-10">Visit Us</button>
  </a>
</div>
<div class="mx-auto text-center w-[40%] justify-center content-center grid grid-cols-4">
                    <img src="https://th.bing.com/th/id/OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" alt="" className="mx-[2px]"/>
	                <img src="https://th.bing.com/th/id/OIP.4AecT4P_DW-rKATZAZmd1wHaGC?w=248&h=202&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
                    <img src="https://th.bing.com/th/id/OIP.Qvg5el4g6fQB0UmiS4wb8wHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
                    <img src="https://th.bing.com/th/id/OIP.RfoRVAX12PsajMLrY5U-mgHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
</div> 
</>
    )}
    export default ShoeBrand;