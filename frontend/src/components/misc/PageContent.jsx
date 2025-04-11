// PageContent.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from "../../pages/Home"
import Login from '../../pages/Login';
import Service from '../../pages/Service';
import About from '../../pages/About';
import NavbarLayout from '../../layouts/NavbarLayout';
import LoadingCircleSpinner from '../../components/misc/LoadingSpinner';

const PageContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timeout);
  }, [location]);

  return loading ? (
    <LoadingCircleSpinner />
  ) : (
    <>
      <NavbarLayout />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default PageContent;