import './Card.css';

function Card(props) {

    return (
        <section id='card' className={props.className}>
            <h4>{props.title}</h4>
            <img src={props.image} alt="home" />
            <p>{props.text}</p>
            <button>LOOK</button>
        </section>
    );
}

export default Card;