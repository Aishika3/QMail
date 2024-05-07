import React, {useState} from "react";

function CareerHelper() {
    const [career, setcareerHeader] = useState(" We understand that every career journey is unique. That's why our program is tailored to meet your specific needs and goals. Through personalized assessments and one-on-one career coaching sessions, we'll help you identify your strengths, map out a career path, and develop a customized action plan.");
    const [careerdescription, setcareerDescription] = useState("Don't miss this opportunity to unlock your true potential. Enroll today!");

    const changecareerDescription = (e) => {
        setcareerDescription(e.target.value);
    }
    
    const changecareerHeader = (e) => {
        setcareerHeader(e.target.value);
    }

    return { career, setcareerHeader, careerdescription, setcareerDescription, changecareerDescription, changecareerHeader };
}



export {CareerHelper};