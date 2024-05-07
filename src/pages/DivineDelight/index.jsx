import React, {useState} from "react";
import { Link } from "react-router-dom";
import GeneratePopup from "../../components/GeneratePopup";

function DivineDelight(props) {
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
    <table className="template w-full mx-auto text-center">
  <tr className="w-full">
    <td className="heading text-center p-10 w-full">
      <img src="https://drive.google.com/uc?id=19lBg3bBI12BRzBKK2sTpFOYTCnhn6LDx" alt="" />
    </td>
  </tr>
  <tr className="w-full">
    <Link to="www.automatiks.in" className="w-full">
      <td className="image text-center w-full">
        <img
          id="editableImage"
          src="https://drive.google.com/uc?id=1o1f9KkE84eNF6DuEBDmiNlEO0VhajIhn"
          alt=""
          className="w-full h-auto rounded-20"
        />
      </td>
    </Link>
  </tr>
  <tr>
    <td className="section1 bg-white w-full border border-gray-300" style={{ borderColor: '#333' }}>
      <img src="https://drive.google.com/uc?id=1Pj2nmDZjT2iDleBPFYS4MZSNOZhDytMR" alt="" width="300" />
      <textarea
  id="editableText"
  contentEditable="true"
  rows="10"
  className="bg-white w-full mx-auto text-center"
  style={{ backgroundColor: '#FFFF' }}
  onChange={(e) => props.changeHeader(e)}>{props.header}</textarea>
   {<GeneratePopup changer={changeValue} isOpen={isEditing} setter={props.setdelightHeader} delightheader={props.delightheader} handleTextareaBlur={handleTextareaBlur} id={"editableText"}/>}
    </td>
  </tr>
  <tr>
    <td className="section2" style={{ borderColor: '#333' }}>
    <textarea
  id="editableText"
  contentEditable="true"
  rows="10"
  className="bg-white w-full mx-auto text-center"
  style={{ backgroundColor: '#FFFF' }}
  onChange={(e) => props.changeDescription(e)} onFocus={handleTextareaFocus}>{props.description}</textarea>
      <img src="https://drive.google.com/uc?id=1W9fJ8ByKIY44N1A6yCWfAvyVW6iTw63w" alt="" className='w-full' />
    </td>
  </tr>
  <tr>
    <td>
    {<GeneratePopup changer={changeValue} isOpen={isEditing} setter={props.setdelightDescription} delightheader={props.delightdescription} handleTextareaBlur={handleTextareaBlur} id={"editableText"}/>}
    </td>
  </tr>
</table>
<div className="button text-center">
  <a href="https://automatiks.in/" className="text-decoration-none justify-center">
    <button className="btn px-8 py-2 rounded-50 text-white bg-gray-800 text-lg m-5 cursor-pointer">Visit Us</button>
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
export default  DivineDelight;
