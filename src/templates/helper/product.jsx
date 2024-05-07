import React, {useState} from "react";

function ProductHelper() {
    const [productheader, setProductHeader] = useState("Automate Your Business with AI and Ease");
    const [productdescription, setProductDescription] = useState("Tired of monotonous tasks? Automatiks is here to help! Our expert team helps you create software to automate your repetitive work, so you can focus on what truly matters.");
    const [feature1, setFeature1] = useState("Al Based Content Writing: Another product that we will launch soon is a Al-based writer designed to generate bespoke content on any enterprise-related topic. From product launches to corporate announcements, this system is fine-tuned to echo the unique voice of your enterprise.");
    const [feature2, setFeature2] = useState("AI based Marketing and Customer-Service Support (by Mindduck.ai): We will also recently launch an AI Marketer alongside Mindduck.ai, where our influence is significant, to launch an efficient 24/7 customer service platform.");
    const [feature3, setFeature3] = useState("WhatsApp Automation: We create tailor-made WhatsApp automated systems to help scale up your business and maintain you customers through WhatsApp hassle-free.");
    const [feature4, setFeature4] = useState("Automation Tools:We develop innovative automation tools to improve efficiency, reduce manual tasks, and increase productivity across your organization.");
    const [feature5, setFeature5] = useState("Elevate your business with our comprehensive services. Our team specializes in visually stunning web development, mobile app development, custom data analysis solutions, and captivating graphic design.");
    const [productfooter, setProductFooter] = useState("It's time to take the leap and revolutionize your startup. Don't miss this opportunity to soar to new heights. Reach out to us today and let's unleash the full potential of your business.");

    const changeProductDescription = (e) => {
        setProductDescription(e.target.value);
    }
    
    const changeProductHeader = (e) => {
        setProductHeader(e.target.value);
    }

    const changeFeature1 = (e) => {
        setFeature1(e.target.value);
    }

    const changeFeature2 = (e) => {
        setFeature2(e.target.value);
    }

    const changeFeature3 = (e) => {
        setFeature3(e.target.value);
    }

    const changeFeature4 = (e) => {
        setFeature4(e.target.value);
    }

    const changeFeature5 = (e) => {
        setFeature5(e.target.value);
    }

    const changeProductFooter = (e) => {
        setProductFooter(e.target.value);
    }

    return { productheader, setProductHeader, productdescription, feature1, feature2, feature3, feature4, feature5, productfooter, setProductDescription, setFeature1, setFeature2, setFeature3, setFeature4, setFeature5, setProductFooter, changeProductDescription, changeProductHeader, changeFeature1, changeFeature2, changeFeature3, changeFeature4, changeFeature5, changeProductFooter };
}

export { ProductHelper };