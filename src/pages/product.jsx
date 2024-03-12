import SizeSelector from "../components/size-selector";

function Product() {
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
                    </div>
                    <div></div>
                </div>
            </section>
        </>
     );
}

export default Product;