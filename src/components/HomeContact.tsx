import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const contacts = [
    [LocationOnIcon, 'Dirección', 'C. del Mercado, Masaya', 'Ubicado en: Mercado Municipal Ernesto Fernandez', 'Ver en mapa', 'https://www.google.com/maps/place/Calzado+Paraj%C3%B3n/@11.973541,-86.0905858,17z/data=!3m1!4b1!4m6!3m5!1s0x8f7408a22e624c15:0x36a22019ecc6499f!8m2!3d11.9735358!4d-86.0880109!16s%2Fg%2F11f0wyr4xl?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3Dl'],
    [PhoneIcon, 'Teléfono', 'Tel: +505 89858585', 'Lun - Sab: 9:00 am - 5:30 pm', 'Llamar ahora', 'tel:+50589858585'],
    [EmailIcon, 'Email', 'parajonmasaya@gmail.com', '', 'Enviar email', 'https://mail.google.com/mail/?view=cm&to=parajonmasaya@gmail.com'],
    [InstagramIcon, 'Instagram', '@parajon_cal', '', 'Ver perfil', 'https://www.instagram.com/parajon_cal?igsh=bDZyZ2xxazRiOTE3'],
    [FacebookIcon, 'Facebook', 'Calzado Parajón', '', 'Ver perfil', 'https://www.facebook.com/share/1R8vwUPoLQ/'],
];

const HomeContact = () => <section style={{ backgroundColor: '#EFD8D6', textAlign: 'center', padding: '2rem 1rem' }}><h2 style={{ color: '#422B23', fontSize: '3.2rem' }}>Contacto</h2><p style={{ color: '#555', fontSize: '1.2rem' }}>¿Tienes alguna pregunta? No dudes en contactarnos. Estamos aquí para ayudarte.</p><div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>{contacts.map(([Icon, title, line1, line2, linkText, href]) => { const ContactIcon = Icon as typeof LocationOnIcon; return <article key={title as string} style={{ background: 'white', borderRadius: '1rem', padding: '2rem', width: '260px' }}><ContactIcon style={{ color: '#422B23', fontSize: 32 }} /><h3 style={{ color: '#111' }}>{title as string}</h3><p style={{ color: '#666' }}>{line1 as string}</p><p style={{ color: '#666' }}>{line2 as string}</p><a href={href as string} target="_blank" rel="noopener noreferrer" style={{ color: '#422B23', fontWeight: 'bold' }}>{linkText as string}</a></article>; })}</div></section>;
export default HomeContact;
