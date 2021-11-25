import './App.css';
import React from 'react';


const RenderImages = props => {

  let localOpen = window.localStorage.getItem("open"); 
  let localOpenArray = JSON.parse(localOpen); 
  if (localOpenArray === null) {
    localOpenArray = []; 
  }
  console.log(localOpenArray); 

  function openWindow (e) {
    let date = new Date().getDate();
    if(date >= e.currentTarget.id.replace(/\D/g, '')) {
      e.currentTarget.src = `/media/window-${e.currentTarget.id.replace(/\D/g, '')}_open.png`
    }
          if (localOpenArray.includes(e.currentTarget.id.replace(/\D/g, '')) === false) {
        localOpenArray.push(e.currentTarget.id.replace(/\D/g, '')); 
        localStorage.setItem("open", JSON.stringify(localOpenArray)); 

      }
    
  }


  let images = [];
  for (let i = 1; i <= 24; i++) {
    if (localOpenArray.includes(String(i).padStart(2, '0'))) {
      images.push(`window-${String(i).padStart(2, '0')}_open.png`);
    }
    else {
      images.push(`window-${String(i).padStart(2, '0')}.png`);
    }
  }

  return (
    <div> 
      {images.map(image => (
        <img src={`/media/${image}`} alt={image} id={image} onClick={openWindow} className="window" ></img>
      ))}
    </div>
  )

};




export default RenderImages; 

