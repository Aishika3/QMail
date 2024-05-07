import React, {useState} from "react";

function DatingBrand() {
    const [DatingHeader, setDatingHeader] = useState("Get Ready For Huge Savings, Don't Miss Our Exclusive Sale!");
    const [datingDescription, setdatingDescription] = useState("Get ready to shop 'til you drop! Our exclusive sale is here, offering unbeatable discounts on your favorite products. And that's not all—we also provide free shipping on all orders over $50, hassle-free returns, and a dedicated customer support team to assist you every step of the way.");

    const changeDatingDescription = (e) => {
        setdatingDescription(e.target.value);
    }
    
    const changeDatingHeader = (e) => {
        setDatingHeader(e.target.value);
    }

    return { DatingHeader, setDatingHeader, datingDescription, setdatingDescription, changeDatingDescription, changeDatingHeader };
}



export {DatingBrand}