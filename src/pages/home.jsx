import LargeCard from "../components/cards/large";
import Hero from "../components/hero";

function Home() {
    return ( 
        <>
            <Hero />
            <section className="category-cards">
                <h3>Explorer la variété</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <LargeCard imageUrl="" title="Lorem" />
                    <LargeCard imageUrl="" title="Lorem" />
                    <LargeCard imageUrl="" title="Lorem" />
                </div>
            </section>
        </>
     );
}

export default Home;