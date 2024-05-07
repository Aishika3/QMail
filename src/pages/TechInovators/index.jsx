import React, {useState} from "react";
//import {Link} from "react-router-dom";
import GeneratePopup from "../../components/GeneratePopup";
function TechInovators(props) {
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
    <div className="container mx-auto max-w-800 px-20">
      <table className="w-full bg-white text-center">
        <tr>
          <td className="heading">
            <img
              src="https://drive.google.com/uc?id=15bToOL66S2KzUatEs7AqauytNx39yOXx"
              alt=""
              className="max-w-full h-auto rounded-5"
            />
          </td>
        </tr>
        <tr>
          <td className="sub-head bg-white py-5">
            <textarea
              id="editableText"
              contentEditable="true"
              className="text-3xl text-center font-bold text-gray-800 font-poppins-medium w-full"
              onChange={props.changetechHeader}>{props.tech}</textarea>
          </td>
        </tr>
        <tr>
          <td className="details bg-blue-200 py-10 border border-gray-300 rounded-5 mx-10">
            <textarea
              id="editableText"
              contentEditable="true"
              className="text-lg text-gray-800 text-justify font-poppins-medium bg-blue-200 border-blue-200 my-5 w-full"
              rows="5"
              onFocus={handleTextareaFocus}
               onChange={props.changetechDescription}>{props.techdescription}</textarea>
                {isEditing && (
            <GeneratePopup
            changer={changeValue}
            isOpen={isEditing}
            setter={props.settechHeader}
            careerheader={props.tech}
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
          <td className="image text-center">
            <img
              id="editableImage"
              src="https://drive.google.com/uc?id=1hnzqCpaFd-Duqd-chGjB8q0kvGKK8fhZ"
              alt=""
              className="max-w-full h-auto rounded-20"
            />
          </td>
        </tr>
      </table>
      <div className="button text-center">
        <a href="https://automatiks.in" className="text-decoration-none justify-center">
          <button className="btn py-8 px-20 text-white bg-gray-800 text-2xl my-10">Visit Us</button>
        </a>
      </div>
      <div class="mx-auto text-center w-[40%] justify-center content-center grid grid-cols-4">
                    <img src="https://th.bing.com/th/id/OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" alt="" className="mx-[2px]"/>
	                <img src="https://th.bing.com/th/id/OIP.4AecT4P_DW-rKATZAZmd1wHaGC?w=248&h=202&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
                    <img src="https://th.bing.com/th/id/OIP.Qvg5el4g6fQB0UmiS4wb8wHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
                    <img src="https://th.bing.com/th/id/OIP.RfoRVAX12PsajMLrY5U-mgHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
</div> 
    </div> 
        </>
    )}
    export default TechInovators;
