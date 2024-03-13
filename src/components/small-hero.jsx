import { useLocation } from "react-router-dom";

function SmallHero() {
    let location = useLocation()
    return ( 
        <section className="small-hero" style={{backgroundImage : 'url(/images/small-hero-bg.png)' }}>
            <p style={{textTransform : "capitalize", fontWeight : "bold", fontSize : "2em"}}>
                {location.pathname.slice(1)}
            </p>
        </section>
     );
}

export default SmallHero;