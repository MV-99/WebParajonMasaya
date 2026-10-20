import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpContent from '../components/HelpContent';

const Ayuda2 = () => (
    <>
        <ArrowBackIcon
            onClick={() => window.history.back()}
            style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '30px', color: '#422B23', cursor: 'pointer', zIndex: 10 }}
        />
        <HelpContent />
    </>
);

export default Ayuda2;
