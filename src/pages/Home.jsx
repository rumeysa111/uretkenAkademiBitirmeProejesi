import React from 'react';
import Navbar from '../components/Navbar';
import background from "/merambel3.jpg";

function Home() {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    margin: 0,
    boxSizing: 'border-box',
  };

  const textContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '-80vh',
  };

  return (
    <div style={divStyle}>
      <div style={textContainerStyle}>
        <h1 style={{ color: 'black' }}>Meram'a Hoşgeldiniz.</h1>
        <h2 style={{ color: 'black' }}>Bu site Meram'a yeni gelenlere yardımcı olmak amacıyla yapılmıştır.</h2>
      </div>
    </div>
  );
}

export default Home;
