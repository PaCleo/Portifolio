import React from "react";
import { Link } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import pactech from '../img/pactech2.png';
import './Header.css';

function Header() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="header">
            <div className="container-logo">
                <img src={pactech} alt="Logo" className="logo" onClick={scrollToTop} />
            </div>

            <div className="organizer-link">
                <div className="container-icons">
                    <div className="icons">
                        <GitHubIcon className="icon" onClick={() => window.open('https://github.com/PaCleo', "_blank")} />
                    </div>

                    <div className="icons">
                        <LinkedInIcon className="icon" onClick={() => window.open('https://www.linkedin.com/in/leonardo-tamiozzo-524163255/', "_blank")} />
                    </div>

                    <div className="icons">
                        <InstagramIcon className="icon" onClick={() => window.open('https://www.instagram.com/pacleoo/', "_blank")} />
                    </div>
                </div>

                <div className="container-link">
                    <Link className="link" to="about-me" smooth={true} duration={500}>About me</Link>
                    <Link className="link" to="project" smooth={true} duration={500}>Projects</Link>
                    <Link className="link" to="contact" smooth={true} duration={500}>Contact</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;