import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

function Navbar(){
    return(
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <Container>
                <nav className="flex h-20 items-center justify-between">
                    <Link to="/">
                       <Logo />
                    </Link>
                    <div className="hidden items-center gap-8 md:flex">
                        <Link to="/" className="font-medium text-slate-600 transition hover:text-indigo-600">Home</Link>
                        <a href="#features" className="font-medium text-slate-600 transition hover:text-indigo-600">Features</a>
                        <a href="#pricing" className="font-medium text-slate-600 transition hover:text-indigo-600">Pricing</a>
                        <a href="#about" className="font-medium text-slate-600 transition hover:text-indigo-600">About</a>
                    </div>
                    <div className="hidden items-center gap-4 md:flex">
                        <Link to="/login">
                          <Button variant="outline">
                            Sign In
                          </Button>
                        </Link>
                        <Link to="/register">
                          <Button>
                            Get Started
                          </Button>
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Navbar;