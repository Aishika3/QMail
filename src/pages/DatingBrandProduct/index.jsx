import React, {useState} from "react";
import {Link} from "react-router-dom";
// import "./styles.css"

function DatingBrandProduct(props) {
    return (
        <>
            <table class="template">
                <tr >
                    <td class="heading-top" >
                        <img src="https://drive.google.com/uc?id=1vSM56VWtkPrQXCjcHXD_fMwOSstsSRmt" alt=""/>
                    </td>
                </tr>
                <tr>
                    <td class="details-top" >
                        <textarea className="w-[80%]" contenteditable="true" rows="4" onChange={(e) => props.changeDatingDescription(e.target.value)}>{props.dating_details}</textarea>
                    </td>
                </tr>
                <tr>
                    <td class="font-sans mx-auto w-[80%] text-7xl text-center text-bold" >
                        <p contenteditable="true" onChange={(e) => props.changeDatingHeader(e.target.value)} className="underline decoration-[#9a5dfd] font-serif">{props.dating_sub_head}</p>
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

export default DatingBrandProduct;