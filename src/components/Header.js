import React from 'react';
import Navigation from './Navigation'

function Header() {
    const text = 'head test'

    return (
        <div className="jumbotron">
            {text}
            <Navigation />
        </div>
    )
}

export default Header