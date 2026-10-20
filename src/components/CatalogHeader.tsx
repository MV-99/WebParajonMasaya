import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

type CatalogHeaderProps = {
    onBack: () => void;
};

const CatalogHeader = ({ onBack }: CatalogHeaderProps) => (
    <header>
        <ArrowBackOutlinedIcon
            onClick={onBack}
            style={{ cursor: 'pointer', marginRight: '0.5rem', color: '#422B23' }}
        />
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', color: '#422B23' }}>
            Catálogo de Zapatos
        </h1>
        <h3 style={{ textAlign: 'center', color: 'gray', fontWeight: 'bold' }}>
            ¡Descubre nuestros diferentes estilos y precios amigables a tu bolsillo!
        </h3>
    </header>
);

export default CatalogHeader;
