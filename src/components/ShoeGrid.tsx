import { Shoe } from './catalogData';
import ShoeCard from './ShoeCard';

type ShoeGridProps = {
    shoes: Shoe[];
    onQuote: (shoe: Shoe) => void;
};

const ShoeGrid = ({ shoes, onQuote }: ShoeGridProps) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {shoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} onQuote={onQuote} />
        ))}
    </div>
);

export default ShoeGrid;
