import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CardStyle.css';
// import "../../pages/Home/CardStyle.css";

const CardTemp = ({ heading, text, img, link}) => {
  return (
    <div className='bg-gray-400 rounded-md'>
      <Card className='card bg-gray-400 rounded-md'>
        <div className='bg-gray-400 p-4 btn-template'>
          <Card.Img className='bg-gray-400 rounded-full mx-auto btn-template' variant="top" src={img}/>
        </div>
        <Card.Body className='bg-gray-400 btn-template p-4'>
          <Card.Title className='text-white'>
            {heading}
          </Card.Title>
          <Card.Text className='text text-gray-200'>
            {text}
          </Card.Text>
          <Link to={link}><button className='btn-template bg-gray-400 text-white px-4 py-2 rounded-md'>Open Template</button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardTemp
