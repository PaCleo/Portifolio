import './Card.css';;

function Card(props) {

    const handleClick = () => {
        window.open(props.link, '_blank'); // Open the link in a new tab/window
    };

    return (
        <section id='card' className={props.className}>
            <h4>{props.title}</h4>
            <img src={props.image} alt="home" />
            <p>{props.text}</p>
            <button onClick={handleClick}>LOOK</button>
        </section>
    );
}

export default Card;