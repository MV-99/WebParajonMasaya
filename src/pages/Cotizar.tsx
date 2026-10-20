import { motion } from 'framer-motion';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import QuoteRequestForm from '../components/QuoteRequestForm';
import QuoteRequestIntro from '../components/QuoteRequestIntro';

const Cotizar = () => {
    const navigate = useNavigate();

    return (
        <motion.main initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ padding: '2rem', backgroundColor: '#F7F3ED', minHeight: '100vh' }}>
            <ArrowBackOutlinedIcon onClick={() => navigate('/')} style={{ cursor: 'pointer', marginRight: '0.5rem', color: '#422B23' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
                <QuoteRequestIntro />
                <QuoteRequestForm onSuccess={() => window.location.reload()} />
            </div>
        </motion.main>
    );
};

export default Cotizar;
