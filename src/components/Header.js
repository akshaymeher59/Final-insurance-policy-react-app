import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href=".">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href=".">Add Policies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".">Claim Policies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".">Claim Settlement</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header