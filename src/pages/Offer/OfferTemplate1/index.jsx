import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import GeneratePopup from "../../../components/GeneratePopup";

function OfferTemplate1(props) {
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
            <div className="mx-auto w-[100%] bg-[#FFE5F6] text-center justify-center content-center">
                <div className="mx-auto">
                    <img src="https://drive.google.com/uc?id=1YH__Gzme5aRcwaufnhoOrf8SuJr_L_YZ" alt="" className="mx-auto"/>      
                </div>
                <div className="bg-[#FFE5F6] text-5xl mx-auto text-bold font-mono w-[80%]">
                    <textarea className="bg-[#FFE5F6] mx-auto text-center" contenteditable="true" rows="4" onChange={(e) => props.changeofferHeader(e)}>{props.offer}</textarea>
                </div>    
                <div className="mx-auto">
                    <img className="mx-auto" src="https://drive.google.com/uc?id=14Ho4o1nRuZwivB5WWW6gtfRsgjIxvhrs" alt=""/>
                </div>          
                <div class="text-center w-[100%] mx-auto">
                    <textarea className="bg-[#FFE5F6] w-[80%] text-lg text-center p-[2px]" rows="8"onFocus={handleTextareaFocus}  onChange={(e) => props.changeofferDescription(e)}>{props.offerdescription}</textarea>
                    {<GeneratePopup changer={changeValue} isOpen={isEditing} setter={props.setdelightDescription} delightheader={props.delightdescription} handleTextareaBlur={handleTextareaBlur} id={"editableText"}/>}
                </div> 

                <div className="mx-auto ">
                    <Link to="https://automatiks.in/">
                        <button className="text-center mx-auto my-[10px] text-xl bg-[#000] text-[#fff] p-[10px] rounded-full">Visit Us</button>
                    </Link>
                </div> 

                <div class="mx-auto text-center w-[40%] justify-center content-center grid grid-cols-4">
                    <img src="https://th.bing.com/th/id/OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" alt="" className="mx-[2px]"/>
	                <img src="https://th.bing.com/th/id/OIP.4AecT4P_DW-rKATZAZmd1wHaGC?w=248&h=202&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
                    <img src="https://th.bing.com/th/id/OIP.Qvg5el4g6fQB0UmiS4wb8wHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
                    <img src="https://th.bing.com/th/id/OIP.RfoRVAX12PsajMLrY5U-mgHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" width="50" height="50" className="bg-[#FFE5F6] mx-[2px]"/>
                </div>     
            </div>
        </>
    )
}

export default OfferTemplate1;