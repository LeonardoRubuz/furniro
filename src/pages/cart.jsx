import SmallHero from "../components/small-hero";

function Cart() {
    return ( 
        <>
            <SmallHero />
            <section className="cart">
                <table>

                </table>
                <div className="cart-totals">
                    <h5>Total</h5>
                    <p>
                        <span>Sous-total </span>
                        <span style={{color:"#898989"}}> 10.98 €</span>
                    </p>
                    <p>
                        <span>Total </span>
                        <span style={{color:"#B88E2F", fontWeight:"600"}}> 10.98 €</span>
                    </p>
                    <div className="quantity-setter" style={{borderColor:"black"}}>
                        Payer
                    </div>
                </div>
            </section>
        </>
     );
}

export default Cart;