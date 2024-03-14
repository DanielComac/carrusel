import React from 'react';
import ReactDOM from 'react-dom';
import Carouselx from './Carouselx.jsx';
import './App.css'; 

const App = () => {
  const images = [
    'https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/07/LOGO-UTD-NUEVO-2022_solo-01.png?fit=1024%2C387&ssl=1',
    'https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/07/ELEMENTOS-GRAFICOS-UTD-2022-05-1.png?resize=1290%2C725&ssl=1',
    'https://tecolotito.elsiglodedurango.com.mx/cdn-cgi/image/format=auto,width=1024/i/2022/03/1054276.jpeg',
  ];

  return (
    <div className="app">
      <h1 className='title'>Carrusel de imágenes</h1>
      <Carouselx images={images} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
