import React, {useState} from "react";

function DelightHelper() {
    const [delight, setdelightHeader] = useState(" We offer an extensive range of flavors and fillings, from classic favorites to innovative combinations. With our customizable options, you can create your own personalized chocolate box and explore a world of unique taste sensations.");
    const [delightdescription, setdelightDescription] = useState("From birthdays and anniversaries to weddings and corporate events, our beautifully packaged chocolates are sure to leave a lasting impression and create unforgettable moments.");

    const changedelightDescription = (e) => {
        setdelightDescription(e.target.value);
    }
    
    const changedelightHeader = (e) => {
        setdelightHeader(e.target.value);
    }

    return { delight, setdelightHeader, delightdescription, setdelightDescription, changedelightDescription, changedelightHeader };
}



export {DelightHelper}