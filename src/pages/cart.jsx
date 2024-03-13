import SmallHero from "../components/small-hero";

function Cart() {
    return ( 
        <>
            <SmallHero />
            <section className="cart">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Article</th>
                                <th>Prix</th>
                                <th>Quantité</th>
                                <th>Sous-total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Asgaard sofa</td>
                                <td>10.98 €</td>
                                <td>1</td>
                                <td>10.98 €</td>
                                <td >
                                    <img src="/images/trash.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Asgaard sofa</td>
                                <td>10.98 €</td>
                                <td>1</td>
                                <td>10.98 €</td>
                                <td >
                                    <img src="/images/trash.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Asgaard sofa</td>
                                <td>10.98 €</td>
                                <td>1</td>
                                <td>10.98 €</td>
                                <td >
                                    <img src="/images/trash.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Asgaard sofa</td>
                                <td>10.98 €</td>
                                <td>1</td>
                                <td>10.98 €</td>
                                <td >
                                    <img src="/images/trash.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Asgaard sofa</td>
                                <td>10.98 €</td>
                                <td>1</td>
                                <td>10.98 €</td>
                                <td >
                                    <img src="/images/trash.svg" alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart-totals">
                    <h5>Total</h5>
                    {/* <p>
                        <span>Sous-total </span>
                        <span style={{color:"#898989"}}> 10.98 €</span>
                    </p> */}
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