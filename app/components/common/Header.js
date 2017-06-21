// Dependencies
import React from "react";
import { Link } from "react-router";

const Header = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header" style={ styles.headerOverride }>
                <h1 className="text-center">New York Times Articler Scraper</h1>
                <h3 className="text-center">Search for articles and make some notes!</h3>
            </div>
        </div>
    </nav>
);

const styles={
    headerOverride: {
        float: "none"
    }
};

// Export the header
export default Header;