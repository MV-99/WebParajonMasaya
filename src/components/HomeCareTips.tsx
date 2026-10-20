import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import HomeIcon from '@mui/icons-material/Home';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion';

const tips = [
    ['01', 'Limpieza regular', 'Limpia tus zapatos con un paño húmedo o cepillo suave para evitar acumulación de suciedad.', CleaningServicesIcon],
    ['02', 'Almacenamiento adecuado', 'Guárdalos en un lugar fresco y seco, preferiblemente en bolsas de tela o cajas ventiladas.', HomeIcon],
    ['03', 'Protección contra humedad', 'Evita exponer tus zapatos al agua. Usa protectores impermeables si es necesario.', UmbrellaIcon],
    ['04', 'Mantenimiento del material', 'Aplica productos especiales para cuero, gamuza o tela según el tipo de calzado.', AutoFixHighIcon],
    ['05', 'Amor y dedicación', 'Revisa regularmente tus zapatos y dales el cariño que merecen para alargar su vida útil.', FavoriteIcon],
];

const HomeCareTips = () => <section style={{ backgroundColor: '#F7F3ED', padding: '3rem 1rem', textAlign: 'center' }}><h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#DBA1A2' }}>Tips para cuidar tu calzado Parajón</h2><p style={{ maxWidth: '700px', margin: '0 auto 2rem', color: '#6b7280', fontSize: '1.2rem' }}>Sigue estos consejos para mantener tus zapatos siempre como nuevos. Una buena práctica de cuidado extiende su vida útil y los mantiene impecables.</p><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>{tips.map(([number, title, description, Icon], index) => { const TipIcon = Icon as typeof CleaningServicesIcon; return <motion.article key={number as string} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.03 }} style={{ backgroundColor: '#EFD8D6', color: 'black', width: '220px', padding: '1rem', borderRadius: '1rem', textAlign: 'left', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><b>{number as string}</b><TipIcon style={{ fontSize: '32px', color: '#422B23' }} /></div><h3 style={{ fontFamily: "'Poppins', sans-serif", color: '#111827' }}>{title as string}</h3><p style={{ color: '#4b5563' }}>{description as string}</p></motion.article>; })}</div></section>;
export default HomeCareTips;
