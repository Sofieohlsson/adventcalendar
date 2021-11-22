import './App.css';
import React from 'react'; 
import RenderImages from './App.test';

function App() {
  return (
    <div className="App">
      <div className="AdventCalendar">
        <div className="windowContainer">
        <div>
          {RenderImages()} 
          </div>
          </div>
      </div>
    </div>
  );
}

export default App; 

