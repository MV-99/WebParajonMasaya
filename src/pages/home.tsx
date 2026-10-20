import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHero from '../components/HomeHero';
import HomeCarousel from '../components/HomeCarousel';
import HomeFeatureCards from '../components/HomeFeatureCards';
import HomeAbout from '../components/HomeAbout';
import HomeGallery from '../components/HomeGallery';
import HomeCareTips from '../components/HomeCareTips';
import HomeContact from '../components/HomeContact';
import WhatsAppButton from '../components/WhatsAppButton';
// @ts-ignore The bundler resolves this stylesheet, but TypeScript has no CSS declaration.
import '../styles/polaroids.css';

const aboutImages = [
    'images/zapato36.jpeg',
    'images/zapato37.jpeg',
    'images/zapato38.jpeg',
    'images/zapato39.jpeg',
    'images/zapato40.jpeg',
    'images/zapato41.jpeg',
];

const Home = () => {
    const navigate = useNavigate();
    const [imageIndex, setImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setImageIndex((previous) => (previous + 1) % aboutImages.length);
                setFade(true);
            }, 500);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
            <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '20px 30px', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 1000 }}>
                <h2 style={{ color: 'black', fontSize: '35px', margin: 0 }}>Parajón</h2>
            </header>
            <div style={{ paddingTop: '100px' }} />
            <HomeHero onNavigate={navigate} />
            <HomeCarousel />
            <HomeFeatureCards />
            <HomeAbout image={aboutImages[imageIndex]} fade={fade} />
            <HomeGallery />
            <HomeCareTips />
            <HomeContact />
            <WhatsAppButton />
        </main>
    );
};

export default Home;
