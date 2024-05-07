import React, {useState} from "react";

function TechInovatorsHelper() {
    const [tech, settechHeader] = useState("Don't miss this opportunity to unlock your true potential. Enroll today!");
    const [techdescription, settechDescription] = useState("We're thrilled to unveil our latest innovation that will revolutionize the tech industry. Pre-order now! In addition to our groundbreaking product, we offer a 2-year warranty, free software updates, and 24/7 technical support to ensure you have the best possible experience.");

    const changetechDescription = (e) => {
        settechDescription(e.target.value);
    };
    
    const changetechHeader = (e) => {
        settechHeader(e.target.value);
    };
    

    return { tech, settechHeader, techdescription, settechDescription, changetechDescription, changetechHeader };
}



export {TechInovatorsHelper}