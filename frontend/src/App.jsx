import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarProvider } from './context/useNavbarContext';
import PageContent from './components/misc/PageContent';
import FooterLayout from './layouts/FooterLayout';
import ConsuleButton from './components/misc/ConsuleButton';

const App = () => {
  return (
    <div className='app-bg relative min-h-max w-screen overflow-x-hidden'>
      <Router>
        <NavbarProvider>
          <PageContent />
          <FooterLayout />
        </NavbarProvider>
      </Router>
    </div> 
  );
};

export default App;