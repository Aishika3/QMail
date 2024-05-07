import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OfferTemplate1 from "../Offer/OfferTemplate1";
import ProductTemplate1 from "../ProductDiscovery/Template1";
import CareerCatalyst from "../CareerCatalyst";
import Button from "react-bootstrap/Button";
import { editDiscountTemplate, editCareerCatalyst,editTechInovatorsTemplate, editShoeBrandTemplate, editDivineDelightTemplate ,editProductTemplate} from "../../templates";
import { DiscountHelper } from "../../templates/helper/offer";
import { ProductHelper } from "../../templates/helper/product";
import { CareerHelper } from "../../templates/helper/Career";
import { TechInovatorsHelper } from "../../templates/helper/tech";
import { DelightHelper } from "../../templates/helper/food";
import { ShoeHelper } from "../../templates/helper/shoe";
import TechInovators from "../TechInovators";
import DivineDelight from "../DivineDelight";
import ShoeBrand from "../ShoeBrand";
import axios from "axios";
import { auth } from '../../libs/firebase';
import { useContext } from 'react';
import { UserRecordContext } from '../../UserRecordContext';
import 'firebase/auth';

function EditTemplate() {
    const [subject, setSubject] = useState("Quirkfy - A Comprehensive Tech Suite");
    const [testmail, setTestmail] = useState("aheldc@gmail.com");
    const [url, setUrl] = useState("https://www.automatiks.in");
    const [insta, setInsta] = useState("");
    const [twitter, setTwitter] = useState("");
    const [facebook, setFacebook] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [userRecord, setUserRecord] = useContext(UserRecordContext);
    const [checked, setChecked] = useState(false);
    const [send, setSend] = useState("");


    const { career, setcareerHeader, careerdescription, setcareerDescription, changecareerDescription, changecareerHeader }=CareerHelper();
    const { tech, settechHeader, techdescription, settechDescription, changetechDescription, changetechHeader }=TechInovatorsHelper();
    const { delight, setdelightHeader, delightdescription, setdelightDescription, changedelightDescription, changedelightHeader } = DelightHelper();
    const { brand, setbrandHeader, branddescription, setbrandDescription, changebrandDescription, changebrandHeader ,brandfooter,setbrandFooter,changebrandFooter} = ShoeHelper();
     const { offer, setofferHeader, offerdescription, setofferDescription, changeofferDescription, changeofferHeader } = DiscountHelper(); 
    const { productheader, setProductHeader, productdescription, feature1, feature2, feature3, feature4, feature5, productfooter, setProductDescription, setFeature1, setFeature2, setFeature3, setFeature4, setFeature5, setProductFooter, changeProductDescription, changeProductHeader, changeFeature1, changeFeature2, changeFeature3, changeFeature4, changeFeature5, changeProductFooter } = ProductHelper();
    const { template } = useParams();
    function sendMail() {
        const bodymail = editDiscountTemplate({
            header: offer,
            description: offerdescription,
            url: url,
            insta: insta,
            twitter: twitter,
            linkedin: linkedin,
            facebook: facebook
        });
    
        const apiUrl = 'http://localhost:8080/email_bulk';

        
        const params = new URLSearchParams({
            userid: 'O6BXh6LtGkhiBQOtYNisdTfs4SD3',
            email_ids: 'anishde85@gmail.com, aheldc@gmail.com',
            username: 'automatiks23@gmail.com',
            password: 'gnslpqklqhakvwkx',
            subject: subject
        });
        let uid = userRecord.uid;
        let idToken = "";// get the JWT token for the user with this uid
        axios({
            method: 'post',
            url: `${apiUrl}?${params}`,
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
            },
            data: bodymail
        })
        .then(res => {
            console.log("Success");
        }).catch((err) => {
            console.log("Failure");
        });
    }; 

    const sendTestMail = () => {
        var bodymail = '';
        if (template === 'career') {
            bodymail = editCareerCatalyst({
              career_sub_head: career,
              career_details: careerdescription,
              url: url
            })}else if (template === 'offer') {
            bodymail = editDiscountTemplate({
              offer: offer,
              offerdescription: offerdescription, 
              url: url   
            })}else if (template === 'food') {
            bodymail = editDivineDelightTemplate({
              delight: delight,
              delightdescription: delightdescription,
              url: url
            })}else if(template==='tech'){
            bodymail=editTechInovatorsTemplate({
                tech:tech,
                techdescription:techdescription,
                url:url
            })}else if (template === 'shoe') {
          bodymail = editShoeBrandTemplate({
            brand: brand,
            branddesciption: branddescription,
            url: url
          })}else if(template==='product')
          {
            bodymail=editProductTemplate({
               product:productheader,
               productdescription:productdescription,
               url:url 
            })}
      
        console.log(bodymail);
        console.log('success');
      

        console.log(bodymail);

        const apiUrl = 'https://automatic-puzzle-kidney.glitch.me/mailer';
        

        const emailData = {
            Messages: [
            {
                From: {
                    Email: 'aheldc4@gmail.com',
                    Name: 'Ahel from Automaite.ai',
                },
                To: [
                {
                    Email: testmail,
                    Name: 'Automatiks',
                },
                ],
                Subject: 'Your email flight plan!',
                HTMLPart: bodymail.toString(),
            },
            ],
        };

        axios
            .post(apiUrl, emailData)
            .then(response => {
            console.log('Email sent:', response.data);
            })
            .catch(error => {
            console.error('Error sending email:', error);
            });

    }   

    return (
        <>
        <div className="w-full my-[100px]">
            <div className="flex lg:flex-row flex-col w-full p-[10px] ">
            <div className="lg:w-[75%] w-full border-2 border-solid border-gray-200 rounded-[10px] shadow-xl p-4 bg-gray-50">
                <div className="w-full mx-auto my-4 text-center">
                    <h5 className="mx-auto text-center text-gray-400">Subject of the Mail:</h5>
                    <input
                    type="text"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className="lg:w-[80%] w-[80%] text-lg p-2 h-[50px] text-gray-400 rounded-full bg-gray-200 focus:outline-none shadow-xl"
                    />
                </div>

                {template === "offer" && (
                    <div className="w-[100%] mx-auto border-2 border-solid border-gray-200 shadow-xl p-[20px] bg-white">
                    <OfferTemplate1
                        offer={offer}
                        offerdescription={offerdescription}
                        changeofferDescription={changeofferDescription}
                        changeofferHeader={changeofferHeader}
                        setofferHeader={setofferHeader}
                        setofferDescription={setofferDescription}
                    />
                    </div>
                )}

                {template === "product" && (
                    <div className="w-[80%] mx-auto border-2 border-solid border-gray-200 shadow-xl p-[20px] bg-white">
                    <ProductTemplate1
                        header={productheader}
                        description={productdescription}
                        feature1={feature1}
                        feature2={feature2}
                        feature3={feature3}
                        feature4={feature4}
                        feature5={feature5}
                        footer={productfooter}
                        changeDescription={changeProductDescription}
                        changeHeader={changeProductHeader}
                        changeFeature1={changeFeature1}
                        changeFeature2={changeFeature2}
                        changeFeature3={changeFeature3}
                        changeFeature4={changeFeature4}
                        changeFeature5={changeFeature5}
                        changeProductFooter={changeProductFooter}
                    />
                    </div>
                )}

                {template === "career" && (
                    <div className="w-[80%] mx-auto border-2 border-solid border-gray-200 shadow-xl p-[20px] bg-white">
                    <CareerCatalyst
                        careerheader={career}
                        careerdescription={careerdescription}
                        changecareerDescription={changecareerDescription}
                        changecareerHeader={changecareerHeader}
                        setcareerHeader={setcareerHeader}
                        setcareerDescription={setcareerDescription}
                    />
                    </div>
                )}

                {template === "tech" && (
                    <div className="w-[80%] mx-auto border-2 border-solid border-gray-200 shadow-xl p-[20px] bg-white">
                    <TechInovators
                        tech={tech}
                        techdescription={techdescription}
                        changetechDescription={changetechDescription}
                        changetechHeader={changetechHeader}
                        settechHeader={settechHeader}
                        settechDescription={settechDescription}
                        changeFeature1={changeFeature1}
                        changeFeature2={changeFeature2}
                        changeFeature3={changeFeature3}
                        changeFeature4={changeFeature4}
                        changeFeature5={changeFeature5}
                        changeProductFooter={changeProductFooter}
                    />
                    </div>
                )}

                {template === "food" && (
                    <div className="w-[80%] mx-auto border-2 border-solid border-gray-200 shadow-xl p-[20px] bg-white">
                    <DivineDelight
                        header={delight}
                        description={delightdescription}
                        changeHeader={changedelightHeader}
                        changeDescription={changedelightDescription}
                    />
                    </div>
                )}

                {template === "shoe" && (
                    <div className="w-[80%] mx-auto border-2 border-solid border-gray-200 shadow-xl p-[20px] bg-white">
                    <ShoeBrand
                        header={brand}
                        description={branddescription}
                        footer={brandfooter}
                        changeDescription={changebrandDescription}
                        changeHeader={changebrandHeader}
                        changefooter={changebrandFooter}
                        changeFeature1={changeFeature1}
                        changeFeature2={changeFeature2}
                        changeFeature3={changeFeature3}
                        changeFeature4={changeFeature4}
                        changeFeature5={changeFeature5}
                    />
                    </div>
                )}
                <br />
                </div>

                <div className="details-section lg:w-[24%] lg:h-[86%] lg:fixed lg:top-[100px] lg:right-0 w-full rounded-xl p-[1px] bg-blueGray-300 border-2 border-gray-900">
            <div className="heading flex items-left justify-left mb-20 bg-blue-200 rounded-t-xl">
                <h2 className="text-left ml-5 font-medium font-semibold tracking-tighter">Enter your details:</h2>
            </div>
            <div className="details-section lg:w-[24%] lg:fixed lg:top-[100px] lg:right-0 w-full p-[5px] items-left justify-left">
                <div className="mx-auto my-[20px] text-center flex flex-col">
                <label className="mx-auto text-center my-[10px] mt-[30px] text-blue-500 font-medium">
                    Provide a link to your website:
                </label>
                <div className="mx-auto w-full text-center">
                    <input
                    type="email"
                    placeholder="Your Website link (Visit Us button in template above)"
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-[60%] text-lg p-[10px] h-[50px] rounded-xl bg-[#D3D3D3] focus:outline-none shadow-xl"
                    />
                </div>
                </div>
                <div className="mx-auto my-[10px] text-center flex flex-col text-blue-500">
                <label className="mx-auto text-center my-[10px]">Provide a link to your company's<br />Insta profile (optional):</label>
                <div className="mx-auto w-full text-center">
                    <input
                    type="email"
                    placeholder="Instagram Profile"
                    onChange={(e) => setInsta(e.target.value)}
                    className="w-[60%] text-lg p-[10px] h-[50px] rounded-xl bg-[#D3D3D3] focus:outline-none shadow-xl"
                    />
                </div>
                </div>
                <div className="mx-auto my-[10px] text-center flex flex-col text-blue-500">
                <p className="mx-auto text-center my-[10px]">Provide a link to your company's<br /> Twitter profile (optional):</p>
                <div className="mx-auto w-full text-center">
                    <input
                    type="email"
                    placeholder="Twitter Profile"
                    onChange={(e) => setTwitter(e.target.value)}
                    className="w-[60%] text-lg p-[10px] h-[50px] rounded-xl bg-[#D3D3D3] focus:outline-none shadow-xl"
                    />
                </div>
                </div>
                <div className="mx-auto my-[10px] text-center flex flex-col text-blue-500">
                <p className="mx-auto text-center my-[10px]">Provide a link to your company's<br /> Facebook profile (optional):</p>
                <div className="mx-auto w-full text-center">
                    <input
                    type="email"
                    placeholder="Facebook Profile"
                    onChange={(e) => setFacebook(e.target.value)}
                    className="w-[60%] text-lg p-[10px] h-[50px] rounded-xl bg-[#D3D3D3] focus:outline-none shadow-xl"
                    />
                </div>
                </div>
                <div className="mx-auto my-[10px] text-center flex flex-col text-blue-500">
                <p className="mx-auto text-center my-[10px]">Provide a link to your company's<br /> LinkedIn profile (optional):</p>
                <div className="mx-auto w-full text-center">
                    <input
                    type="email"
                    placeholder="LinkedIn Profile"
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="w-[60%] text-lg p-[10px] h-[50px] rounded-xl bg-[#D3D3D3] focus:outline-none shadow-xl"
                    />
                </div>
                </div>
            </div>
            </div>
            </div>
            <br />
            <div className="lg:w-[70%] my-[10px] flex flex-col p-[10px]">
                <p className="my-[0px] w-[80%] text-gray-400">Send a test mail, see how it looks before you send:</p>
                <div className="flex flex-row text-center w-[80%]">
                    <input type='email' placeholder='Type Test Email Id' onChange={(e) => setTestmail(e.target.value)} className="w-[70%] text-lg h-[50px] rounded-md bg-gray-200 p-2 focus:outline-none shadow-xl"/>
                    <Button className='btn-dark mx-[2px] my-0' onClick={sendTestMail}>Test Mail</Button>
                </div>

                <div className="mt-[30px]">
                    <div className="w-[80%] my-auto py-auto flex flex-row h-[20px]">
                        <input type="checkbox" className="mx-[4px] my-auto" checked={checked} onChange={e => setChecked(e.target.checked)}/>
                        <p className="my-auto text-[#ff0000]">Do you want to send the final mail?</p>
                    </div>
                </div>

                {checked && 
                <div className="w-[80%] my-[30px] mb-[50px]">
                    <input type="text" onChange={(e) => setSend(e.target.value)} placeholder="Type 'send'" className='mr-[8px] focus:outline-none focus:border-[#ff0000] border-b-2 border-solid border-[#000]'/>
                    <Button className='btn btn-light btn-outline-dark mx-auto my-0 text-center px-[20px] bg-[#fff]' onClick={sendMail}>Send Mail</Button>
                </div>}
            </div>
        </div>    
            
        </>
    )
}

export default EditTemplate;
