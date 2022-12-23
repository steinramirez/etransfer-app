import React, { useState, useEffect } from 'react';
const UnderConstruction = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width < 700) {
    return (
      <div style={{ maxWidth: '700px', minWidth: '330px', margin: '0 auto' }}>
        <h1 style={{ color: 'rgb(44,44,44)' }}>Under Construction</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            {/* Left column: image goes here */}
          </div>
          <div style={{ flex: '1' }}>
            {/* Right column: text goes here */}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UnderConstruction;