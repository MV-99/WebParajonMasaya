import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const faqs = [
    ['¿Cómo realizo una cotización?', 'Para realizar una cotización fuera del catálogo de zapatos, ve al apartado superior de la pantalla y selecciona Solicitar Cotización. Esto te llevará a una pantalla donde podrás registrar tu cotización de forma libre.'],
    ['¿Cómo realizo una cotización desde el catálogo de zapatos?', 'En el zapato que sea de tu preferencia, selecciona el botón rosado Cotizar. Una vez presionado, rellena los campos solicitados con información de la cotización y presiona el botón de Enviar Cotización.'],
    ['¿Cómo realizo un encargo?', 'Para realizar un encargo, ve a la parte superior de la página y selecciona el botón de Solicitar Cotización. Escribe las especificaciones de tu encargo y nos pondremos en contacto contigo.'],
    ['¿Cómo me puedo contactar con la tienda?', 'Ve a la parte final de la página. En el apartado de contactos te indicamos cada uno de los medios disponibles para comunicarte con nosotros.'],
];

const HelpContent = () => (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <motion.h1 style={{ color: '#422B23', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <StarOutlinedIcon style={{ fontSize: '40px', color: '#422B23' }} />Centro de Ayuda Parajón<StarOutlinedIcon style={{ fontSize: '40px', color: '#422B23' }} />
        </motion.h1>
        <p style={{ textAlign: 'center', color: '#000000' }}>Aquí encontrarás información útil sobre cómo usar la página de Parajón.</p>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h2 style={{ color: '#DBA1A2' }}>Preguntas Frecuentes</h2>
            {faqs.map(([question, answer], index) => <motion.details key={question} style={{ marginBottom: '10px', cursor: 'pointer' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}><summary style={{ fontWeight: 'bold' }}>{question}</summary><p style={{ marginTop: '5px', color: '#000000' }}>{answer}</p></motion.details>)}
        </motion.section>
        <motion.div style={{ marginTop: '20px', textAlign: 'center' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p style={{ color: '#DBA1A2', fontWeight: 'bold' }}>Si no encuentras lo que buscas, contáctanos para más ayuda. ¡Saludos!</p>
            <Button variant="contained" style={{ backgroundColor: '#DBA1A2', color: 'white', borderRadius: '20px' }} onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=parajonmasaya@gmail.com', '_blank')}><EmailOutlinedIcon style={{ color: 'black' }} /></Button>
        </motion.div>
    </motion.div>
);

export default HelpContent;
