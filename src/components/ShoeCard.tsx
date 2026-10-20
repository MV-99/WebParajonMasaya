import { Shoe } from './catalogData';

type ShoeCardProps = {
    shoe: Shoe;
    onQuote: (shoe: Shoe) => void;
};

const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const sizeBadgeStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f0',
    padding: '5px 8px',
    borderRadius: '20px',
    fontSize: '12px',
};

const quoteButtonStyle: React.CSSProperties = {
    marginTop: '10px',
    backgroundColor: '#DBA1A2',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
};

const ShoeCard = ({ shoe, onQuote }: ShoeCardProps) => (
    <article style={cardStyle}>
        <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: '#eee', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={shoe.image} alt={shoe.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'black', color: 'white', padding: '2px 6px', borderRadius: '5px', fontSize: '12px' }}>
                {shoe.gender}
            </span>
        </div>
        <div style={{ marginTop: '10px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{shoe.name}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
                {new Intl.NumberFormat('es-NI', {
                    style: 'currency',
                    currency: 'NIO',
                    minimumFractionDigits: 2,
                }).format(shoe.price)}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                {shoe.sizes.map((shoeSize) => (
                    <span key={shoeSize} style={sizeBadgeStyle}>{shoeSize}</span>
                ))}
            </div>
            <button onClick={() => onQuote(shoe)} style={quoteButtonStyle}>Cotizar</button>
        </div>
    </article>
);

export default ShoeCard;
