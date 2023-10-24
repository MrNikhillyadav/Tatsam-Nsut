import React, { useState, useEffect } from 'react';
import { Navbar, Header, Events, Members, Newsletter, Footer , Spinner
 } from './components';

// import { BrowserRouter , Routes , Route } from 'react-router-dom';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    //Time delay for loader 

    return () => clearTimeout(timer);
  }, []); 
  return (
    <div>
      {isLoading ? <Spinner /> : (
        <>
          <Header/>
          <Events/>
          <Members/>
          <Newsletter/>
          <Footer/>
        </>
      )} 
    </div>
  );
}

export default App;
