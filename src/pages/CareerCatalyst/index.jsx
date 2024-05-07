import React, {useState} from "react";
import GeneratePopup from "../../components/GeneratePopup";
function CareerCatalyst(props)
{
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
    <table class="container">
        <tr>
            <td class="heading">
                <img src="https://drive.google.com/uc?id=1V-Ci3qmHwHLfBncZI4zzjAvQe92jPsaX" alt=""/>
            </td>
        </tr>
        <tr>
            <td class="w-full">
                <img id="editableImage" className="w-full" src="https://drive.google.com/uc?id=1MtEj1bjXKg8J5_GXTJyn5UQvMqeYyIC2" alt=""/>
            </td>
        </tr>
        <tr>
            <td class="space"><br/></td>
        </tr>
        <tr>
        <td className="details" style={{ position: 'relative' }}>
        <textarea
            id="editableText1"
            contentEditable="true"
            rows="5"
            onChange={props.changecareerHeader}
            onFocus={handleTextareaFocus}
        >
            {props.careerheader}
        </textarea>
        {isEditing && (
            <GeneratePopup
            changer={changeValue}
            isOpen={isEditing}
            setter={props.setcareerHeader}
            careerheader={props.careerheader}
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
            <td class="space"><br/></td>
        </tr>
        <tr>
            <td class="sub-head">
                <textarea id="editabText" contenteditable="true"  rows="4" className="text-center text-5xl font-bold w-full text-bold" onChange={props.changecareerDescription}>{props.careerdescription}</textarea>
            </td>
        </tr>
        <tr>
            <td class="space"><br/></td>
        </tr>
    </table>
    <div class="button bg-[#000] rounded-full w-[20%] mx-auto">
        <a href="https://automatiks.in/">
            <button class="bg-[#000] text-white px-4 py-2 rounded-full" >Visit Us</button>
        </a>
    </div>
    <div class="footer">
        <div class="home__social">
            <a href="https://www.linkedin.com/company/automatiks/?originalSubdomain=in" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
            <a href="https://twitter.com/automatiks" class="home__social-icon"><i class='bx bxl-twitter'></i></a>
        </div>
    </div>
    </>
    )
}
export  default CareerCatalyst;