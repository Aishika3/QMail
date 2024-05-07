import React, {useState} from "react";

function ShoeHelper() {
    const [brand, setbrandHeader] = useState("Ready to make a stylish statement? XYZ Shoe Co. has the perfect pair for you!");
    const [branddescription, setbrandDescription] = useState("Discover more styles");
    const [brandfooter, setbrandFooter] = useState("Uncompromising Comfort | Express Yourself | Lasting Quality");

    const changebrandDescription = (e) => {
        setbrandDescription(e.target.value);
    }
    
    const changebrandHeader = (e) => {
        setbrandHeader(e.target.value);
    }
    const changebrandFooter = (e) => {
        setbrandFooter(e.target.value);
    }
    return {brand,setbrandHeader,setbrandDescription,setbrandFooter,branddescription,brandfooter,changebrandDescription,changebrandHeader,changebrandFooter};
}



export {ShoeHelper}
