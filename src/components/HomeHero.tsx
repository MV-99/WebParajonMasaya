import { Button } from '@mui/material';

type HomeHeroProps = { onNavigate: (path: string) => void };

const HomeHero = ({ onNavigate }: HomeHeroProps) => (
    <section style={{ position: 'relative', padding: '100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', height: '55vh', overflow: 'hidden' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
            <source src="/images/negro.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video>
        <div style={{ zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '40px', borderRadius: '20px', maxWidth: '800px', backdropFilter: 'blur(10px)' }}>
            <h1 style={{ fontSize: '55px', fontWeight: 'bold', marginBottom: '20px' }}>Calzado Artesanal Parajón</h1>
            <p style={{ fontSize: '20px', marginBottom: '30px' }}>Descubre nuestra exclusiva colección de calzado. No vendemos en línea, pero te ofrecemos cotizaciones personalizadas y encargos personalizados para que encuentres el mejor precio para tus zapatos favoritos.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {([['/cotizacion', 'Solicitar Cotización'], ['/catalogo', 'Ver Catálogo'], ['/ayuda2', 'Ayuda']]).map(([path, label]) => <Button key={path} variant="contained" sx={{ backgroundColor: '#422B23', color: '#F7F3ED', borderRadius: '20px' }} onClick={() => onNavigate(path)}>{label}</Button>)}
            </div>
        </div>
    </section>
);

export default HomeHero;
