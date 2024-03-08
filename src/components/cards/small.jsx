import SecondaryButton from "../buttons/secondary";

function SmallCard() {
    return ( 
        <div className="small-card">
            <div className="front-container">
                <div id="badge" style={{ backgroundImage : 'url(/images/image-1.png)' }}>
                    <span className="circular-badge">-30%</span>
                </div>
                <h5>Syltherine</h5>
                <span id="item-category">Stylish cafe chair</span>
                <p>45$</p>
            </div>
            <div className="card-overlap">
                <SecondaryButton text="Ajouter au panier" />
            </div>
        </div>
     );
}

export default SmallCard;