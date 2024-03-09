import SmallCard from "../components/cards/small";
import SmallHero from "../components/small-hero";

function Shop() {
    return ( 
        <>
            <SmallHero />
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
            
        </>
     );
}

export default Shop;