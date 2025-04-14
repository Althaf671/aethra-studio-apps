import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarProvider } from './context/useNavbarContext';
import PageContent from './components/misc/PageContent';
import FooterLayout from './layouts/FooterLayout';

const App = () => {
  return (
    <div className='app-bg min-h-max w-screen'>
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