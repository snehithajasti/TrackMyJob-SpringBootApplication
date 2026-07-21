import Container from "../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero(){
    return(
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 lg:py-28">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <HeroContent />
                    <HeroImage />
                </div>
            </Container>
        </section>
    );
}

export default Hero;