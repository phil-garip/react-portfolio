import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return(
        <ul className="nav">
            <li className="nav-item">
                <a 
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                > 
                Home
                </a> 
            </li>
            <li className="nav-item">
                <a 
                href="#Projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                > 
                Projects
                </a> 
            </li>
            <li className="nav-item">
                <a 
                href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                > 
                Contact
                </a>
            </li>
            
        </ul>
    )
}

export default Navigation