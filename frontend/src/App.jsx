import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarProvider } from './context/useNavbarContext';
import PageContent from './components/misc/PageContent';

const App = () => {
  return (
    <div className='app-bg h-[3000px] w-screen'>
      <Router>
        <NavbarProvider>
          <PageContent />
        </NavbarProvider>
      </Router>
    </div>
  );
};

export default App;