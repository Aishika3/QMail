import React, {useState} from "react";

function DiscountHelper() {
    const [offer, setofferHeader] = useState("Get Ready For Huge Savings, Don't Miss Our Exclusive Sale!");
    const [offerdescription, setofferDescription] = useState("Get ready to shop 'til you drop! Our exclusive sale is here, offering unbeatable discounts on your favorite products. And that's not all—we also provide free shipping on all orders over $50, hassle-free returns, and a dedicated customer support team to assist you every step of the way.");

    const changeofferDescription = (e) => {
        setofferDescription(e.target.value);
    }
    
    const changeofferHeader = (e) => {
        setofferHeader(e.target.value);
    }

    return { offer, setofferHeader, offerdescription, setofferDescription, changeofferDescription, changeofferHeader };
}



export { DiscountHelper}