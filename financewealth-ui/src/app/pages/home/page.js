'use client';

import DevContainer from '../../components/devmode/DevContainer';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../styles/home.scss';

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