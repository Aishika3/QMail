import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardBody from "../../pages/Home/CardTemp";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../pages/Home/CardStyle.css";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail } from "firebase/auth";

function Home({data}) {
  const auth = getAuth();
  
  if (isSignInWithEmailLink(auth, window.location.href)) {
    console.log("Yes")
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
        console.log("hehe")
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
        console.log(error)
      });
  }
  

  return (
    <div className="top-[100px] my-[100px]">
    <Container className="top-[100px]">
          <Row xs={1} md={2} lg={3} className="row">
              {data.map((item, index) => (
            <Col key={index} className="element_center mb-4">
              {/* <Card> */}
                <CardBody 
                img= {item.image}
                heading= {item.title}
                text= {item.text} 
                link= {item.link} />
              {/* </Card> */}

            </Col>
                ))}
          </Row>
    </Container>
    </div>
  )
}

const ParentComponent = () => {
  const cardData = [
    {
      title: 'Career Catalyst',
      image: '/images/careerCatalyst.png',
      text: 'Elevate your career guidance services with our automated platform. Revolutionize the way you empower clients. Contact us now!',
      link: '/templates/career'
    },
    {
      title: 'Card 2',
      image: '/images/datingApp.png',
      text: 'Spread the essence of love through QuirkMail. Start mailing and get the best results. Attract your customer and make them enjoy!',
      link: '/templates/product'
    },
    {
      title: 'Food Delivery',
      image: '/images/Food.png',
      text: 'Elevate your elegance through our automated mailing system and increase efficiency quickly and efortlessly. Start your journey now!',
      link:'/templates/food'
    },
    {
      title: 'Card 2',
      image: '/images/Product.png',
      text: 'This is Card 2',
      link:'/templates/offer'
    },
    {
      title: 'Card 2',
      image: '/images/Shoe.png',
      text: 'This is Card 2',
      link:'/templates/shoe'
    },
    {
      title: 'Card 2',
      image: '/images/Tech.png',
      text: 'This is Card 2',
      link:'/templates/tech'
    },
  ];
  return <Home data={cardData} />;
};

export default ParentComponent;
