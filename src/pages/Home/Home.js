import Header from '../../components/Sections/Header/Header';
import Hero from '../../components/Sections/Hero/Hero';
import Reproductions from '../../components/Sections/Reproductions/Reproductions';
import News from '../../components/Sections/News/News';
import OurTeam from '../../components/Sections/OurTeam/OurTeam';
import Footer from '../../components/Sections/Footer/Footer';

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Reproductions />
            <News />
            <OurTeam />
            <Footer />
        </div>
    );
}

export default Home;
