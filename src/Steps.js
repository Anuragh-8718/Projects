// import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
import React from 'react';
// import image1 from '../Assets/price.jpg';
// import image2 from '../Assets/location.jpg';
// import image3 from '../Assets/schedule.jpg';
import './Steps.css';
const Steps = () => {
    
    
  const images = [
    
    {
      id: 1,
      font:'Breakfast',
      heading: 'Breakfast',
      description: 'Dining',
    },
    {
      id: 2,
      font:'Lunch',
      heading: 'Lunch',
      description: 'TakeAway',
    },
    {
      id: 3,
      font :'Dinner',
      heading: 'Dinner',
      description: 'Buff ',
    },
  ];
 
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          
          <h2 className='jersey '>{image.font}</h2>
          {/* <h3>{image.heading}</h3> */}
          <p style={{fontSize:'27px',fontWeight:'bold'}}>{image.description}</p>
        </div>
      ))}
    </div>
  );
};
 
export default Steps;

 
 



































