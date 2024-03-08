import LargeCard from "../components/cards/large";
import SmallCard from "../components/cards/small";
import Hero from "../components/hero";

function Home() {
    return ( 
        <>
            <Hero />
            <section className="category-cards">
                <h3>Explorer la variété</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <LargeCard imageUrl="/images/image-106.png" title="Salle à manger" />
                    <LargeCard imageUrl="/images/image-100.png" title="Salon" />
                    <LargeCard imageUrl="/images/image-101.png" title="Chambre" />
                </div>
            </section>
            <section className="suggested-products">
                <h3>Nos produits</h3>
                <div className="products-grid">
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </div>
            </section>
        </>
     );
}

export default Home;