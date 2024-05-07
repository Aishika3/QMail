import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./styles.css";
//import GeneratePopup from "../../components/GeneratePopup";

function Template1(props) {
    return (
        <>
            <table class="template">
                <tr >
                    <td class="heading-top" >
                        <img src="https://drive.google.com/uc?id=1vSM56VWtkPrQXCjcHXD_fMwOSstsSRmt" alt=""/>
                    </td>
                </tr>
                <tr>
                    <td class="font-sans mx-auto w-[80%] text-7xl text-center text-bold" >
                        <textarea contenteditable="true" onChange={(e) => props.changeHeader(e.target.value)} className="underline decoration-[#9a5dfd] font-serif">{props.header}</textarea>
                    </td>
                </tr>
                <tr>
                    <td class="details-top" >
                        <textarea className="w-[80%]" contenteditable="true" rows="4" onChange={(e) => props.changeDescription(e.target.value)}>{props.description}</textarea>
                    </td>
                </tr>
                <tr>
                    <td class="details-top" >
                        <h2 contenteditable="true" className="w-[80%]">Our services include:</h2>
                    </td>
                </tr>
                <tr>
                    <td class="w-[100%] flex flex-row bg-[#DDC8FF]" >
                        <img src="https://drive.google.com/uc?id=19P_lmaO3cAkziMopnwdQAbQBF2v_xmGN" alt="" width="150"/>
                        <textarea className="w-[80%] bg-[#DDC8FF]" contenteditable="true" rows="5" onChange={(e) => props.changeFeature1(e.target.value)}>{props.feature1}</textarea>
                    </td>
                </tr>
                <tr>
                    <td class="w-[100%] flex flex-row">
                        <textarea className="w-[80%]" contenteditable="true" rows="5" onChange={(e) => props.changeFeature2(e.target.value)}>{props.feature2}</textarea>
                        <img src="https://drive.google.com/uc?id=1sAYkE-ulP9MbVe3t5lVHjStMLUC643LS" alt="" width="150"/>
                    </td>
                </tr>
                <tr className="bg-[#DDC8FF]">
                    <td className="w-[100%] flex flex-row bg-[#DDC8FF]">
                                <textarea className="w-[80%] bg-[#DDC8FF]" contenteditable="true" rows="5" onChange={(e) => props.changeFeature3(e.target.value)}>{props.feature3}</textarea>                           
                                <img src="https://drive.google.com/uc?id=1YMT-d1-mWhggEeaiiGE5o7WspyeioPlG" alt="" width="150"/>
                    </td>
                </tr>
                <tr>
                    <td className="w-[100%] flex flex-row">
                        <img src="https://drive.google.com/uc?id=1vv1kgjwOIHcEfBEVlxFYBDEvAwfTEad4" alt="" width="150"/>
                        <textarea contenteditable="true" className="w-[80%]" onChange={(e) => props.changeFeature4(e.target.value)}>{props.feature4}</textarea>      
                    </td>
                </tr>
                <tr className="bg-[#DDC8FF]">
                    <td className="w-[100%] flex flex-row bg-[##DDC8FF]">
                        <textarea className="w-[80%] bg-[#DDC8FF]" contenteditable="true" onChange={(e) => props.changeFeature5(e.target.value)}>{props.feature5}</textarea>
                        <img src="https://drive.google.com/uc?id=1UEG5X5l317qss38DTL3fRpj-giD3t14r" alt="" width="150"/>   
                    </td>
                </tr>
                <tr>
                    <td class="details">
                        <textarea id="editableText" contenteditable="true" rows="4" onChange={(e) => props.changeFooter(e.target.value)}>{props.footer}</textarea>
                    </td>
                </tr>
            </table>
            <div className="mx-auto text-center">
                <Link to="https://automatiks.in/">
                    <button className="text-center mx-auto my-[10px] text-xl bg-[#000] text-[#fff] p-[10px] rounded-full">Visit Us</button>
                </Link>
            </div>
        </>
    )
}

export default Template1;