import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DevContainer from '../../components/devmode/DevContainer';

const Home = () => {
    return(
        <>
            <Header />

            <main>
                <DevContainer />
            </main>

            <Footer />
        </>
    );
}

export default Home;