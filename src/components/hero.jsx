import PrimaryButton from "./buttons/primary";

function Hero() {
    return ( 
        <section className="hero" style={{backgroundImage : 'url(/images/scandinavian-interior-mockup-wall-decal-background.png)' }}>
            <div>
                <h4>Nouveautés</h4>
                <h2>Découvrez notre nouvelle  collection de vêtements !</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis magnam?</p>
                <PrimaryButton />
            </div>
        </section>
     );
}

export default Hero;