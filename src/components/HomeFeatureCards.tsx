import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EditIcon from '@mui/icons-material/Edit';

const features = [
    [LocalShippingIcon, 'Envío a todo el país', 'Llegamos a todos los rincones con rapidez y seguridad'],
    [MilitaryTechIcon, 'Materiales de alta calidad', 'Seleccionamos solo los mejores materiales para tu confort'],
    [EditIcon, 'Diseños únicos y personalizables', 'Adapta tu calzado a tu estilo personal'],
];

const HomeFeatureCards = () => <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', padding: '2rem', backgroundColor: '#EFD8D6' }}>{features.map(([Icon, title, description]) => {
    const FeatureIcon = Icon as typeof LocalShippingIcon;
    return <article key={title as string} style={{ width: '300px', textAlign: 'center', padding: '1.5rem', borderRadius: '1.5rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}><FeatureIcon style={{ fontSize: 50, color: '#422B23' }} /><h3 style={{ color: '#111827' }}>{title as string}</h3><p style={{ color: '#4b5563' }}>{description as string}</p></article>;
})}</section>;

export default HomeFeatureCards;
