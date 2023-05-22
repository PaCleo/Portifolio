import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import pactech from '../img/pactech2.png';
import './Header.css';

function Header(props) {
    function handleNavigation(sectionId) {
    if (sectionId === "about-me") {
        props.aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
      } else if(sectionId === "contact"){
        props.aboutMeContact.current.scrollIntoView({ behavior: "smooth" });
      }
    }

    return (
        <header className="header">
            <div className="container-logo">
                <img src={pactech} alt="Logo" className="logo" />
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
                    <div className="link" onClick={() => handleNavigation("about-me")}>About me</div>
                    <div className="link" onClick={() => handleNavigation("Curriculum")}>Curriculum</div>
                    <div className="link" onClick={() => handleNavigation("contact")}>Contact</div>
                </div>
            </div>
        </header>
    );
}

export default Header;