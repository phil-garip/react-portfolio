import React, { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navigation from './Navigation';
import Header from './Header';


export default function Portfolio() {
const [currentPage, setCurrentPage] = useState('Home');

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
    if (currentPage === 'Home') {
    return <Home />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
    if (currentPage === 'Projects') {
    return <Projects />;
    }
    return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div className="container d-flex flex-column align-items-center">
    {/* We are passing the currentPage from state and the function to update it */}
    <Header />
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
    </div>
);
}