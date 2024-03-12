import ColorSelector from "../components/color-selector";
import SizeSelector from "../components/size-selector";
import { useState } from "react";

function Product() {
    const [quantity, setQuantity] = useState(1);
    return ( 
        <>
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <p>Accueil</p>
                    <img src="/images/dash.svg" alt="dash icon" />
                    <p>Boutique</p>
                    <img src="/images/dash.svg" alt="dash icon" />
                    <div></div>
                </div>
                <span>Produit</span>
            </div>
            <section className="product-info">
                <div>
                    <img src="/images/asgaard-sofa-3.png" alt="" />
                </div>
                <div>
                    <div>
                        <h1>Product Name</h1>
                        <h3>Product price</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cum placeat optio ad, blanditiis impedit.</p>
                        <SizeSelector />
                        <ColorSelector />
                        <br />
                        <div className="product-actions">
                            <div className="quantity-setter">
                                <span>-</span>
                                <span>{quantity}</span>
                                <span>+</span>
                            </div>
                            <button>
                                Ajouter au panier
                            </button>
                        </div>
                        <hr style={{margin : "3rem 0"}}/>
                        <div className="product-details">
                            <p>Code : SS01</p>
                            <p>Categorie : Sofas</p>
                            <p>Tags : Sofa, Chaise, Maison, Boutique</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Product;