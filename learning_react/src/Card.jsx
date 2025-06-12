import picture from './assets/42k41q.webp';
function Card(){

    return (
        <div className="card">
            <img className="card-image1  " src="https://imgs.search.brave.com/r2jxZigc2X4SByRfcuMtHVQlWBujEmUekN05Zs_9rzg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/NDU2Z2l1LmpwZw" alt="Picture of the card" />
            {/* Above one is imported from web directly
                Below one is in the assets folder offline */}
            <img className="card-image2" src={picture} alt="Another Image" />
            <h2>This is a Card</h2>
            <p>This is a description of the card when
                 I was learning React.</p>


        </div>

    )
}
export default Card;
// This is a placeholder for the Card component.