import Card from '../Card/Card';
import React, { useState, useRef } from "react";
import './Body.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

//images

import crud from '../img/crudred.png';
import agencia from '../img/agencia.png';
import clinic from '../img/clinic.png';
import amazon from '../img/amazon.png';
import realState from '../img/realState.png';
import baker from '../img/baker.png';
import hotel from '../img/hotel.png';
import branding from '../img/design.png';

function Body() {
    const aboutMeRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);


    const cardList = [
        {
            title: "CRUD of Announces",
            image: crud,
            text: "This website is a crud, with mysql, node.js and react, here you can register an account, login, search for products and you can post an announce of your own, you also can edit to put an image or change the value."
        },
        {
            title: "Travel Agency",
            image: agencia,
            text: "This is a travel agency using just html and css, here is just a web page with no api."
        },
        {
            title: "Medical Clinic",
            image: clinic,
            text: "This website is a Medical clinic, created with hmtl and css only, and have 2 pages, the home and one to see the schedule of the doctors."
        },
        {
            title: "Amazon Clone",
            image: amazon,
            text: "The website is basically a clone of Amazon, with api to login and register, but was not created to the user to buy, because was just made for the portifolio."
        },
        {
            title: "Real State",
            image: realState,
            text: "Imobiliaria Santos is a Website with just hmtl and css created for my study."
        },
        {
            title: "Branding design",
            image: branding,
            text: "Branding design is a website where i started working with react, basically is a static website but have the button to turn to darkmode and lightmode."
        },
        {
            title: "Secret Hotel",
            image: hotel,
            text: "Secret Hotel is a Hotel in Angra dos Reis Brazil, this a website of a hotel that i did to improve my css and html, he has 2 pages, the home and the bedrooms."
        },
        {
            title: "Bakery Plus",
            image: baker,
            text: "Bakery Plus is a website with hmlt and css created in one of the courses that i did."
        }
        
    ];


    // define number of cards per page
    const cardsPerPage = 6;

    // Define the inicial state
    const [currentPage, setCurrentPage] = useState(0);

    // make the calculation of the indice of the pages to show
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;


    const renderCards = () => {

        return (
            <div className='card-container'>
                {cardList.slice(startIndex, endIndex).map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        text={card.text}
                    />

                ))}
            </div>
        );
    };

    const renderNavigationButtons = () => {
        const hasPreviousPage = currentPage > 0;
        const hasNextPage = endIndex < cardList.length;

        return (
            <div className="navigation-buttons">
                <button onClick={goToPreviousPage} disabled={!hasPreviousPage}>
                    Previous
                </button>
                <button onClick={goToNextPage} disabled={!hasNextPage}>
                    Next
                </button>
            </div>
        );
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };


    function sendEmail(email) {
        window.location.href = `mailto:${email}`;
    }

    function makeCall(number) {
        window.location.href = `tel:${number}`;
    }

    function sendMessage(number) {
        const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}`;
        window.open(url, '_blank');
    }


    return (
        <div className="body">
            <div className="about-me" ref={aboutMeRef} >
                <h2>ABOUT ME</h2>
                <div className="introducing">
                    <p>
                        I am Leonardo Pereira Tamiozzo.
                        I'm 21 years old currently i'm studing Sistemas de informação
                        (Like software engineering but in Brazil), i also study through internet doing courses
                        in HTML, CSS, SQL, NODE and REACT with JavaScript.
                    </p>
                </div>
            </div>

            <div className="project" ref={projectRef}>
                <div className="box-filter">
                    <div className="filter">
                        <h4>PROJECTS</h4>
                        <div className="box-h5">
                            <h5>All projects are hosted on AWS instances, database and api as well.</h5>
                        </div>
                    </div>
                </div>

                <div className="box-projects">
                    <div className="max-limit">
                        {renderCards()}
                    </div>
                    {renderNavigationButtons()}
                </div>
            </div>

            <div className="contact" ref={contactRef}>
                <div className='box-mail'>
                    <div className='flex'>
                        <LocationOnIcon />
                        <p>Brasil, RS-Frederico Westphalen</p>
                    </div>
                    <div className='mail flex'>
                        <EmailIcon className='pointer' onClick={() => sendEmail('pereiraleo01@gmail.com')} />
                        <p> pereiraleo01@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <CallIcon className='pointer' onClick={() => makeCall('(55)55 999333919')} />
                        <p> (55)55 999333919</p>
                    </div>
                    <div className='mail flex'>
                        <WhatsAppIcon className='pointer' onClick={() => sendMessage('5555999333919')} />
                        <p> (55)55 999333919</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;