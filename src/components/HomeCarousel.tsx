const images = ['images/zapato1.png', 'images/zapato5.png', 'images/zapato4.png', 'images/zapato8.png', 'images/zapato10.png', 'images/zapato11.png', 'images/zapato14.png', 'images/zapato17.png', 'images/zapato15.png'];
const styles: Record<string, React.CSSProperties> = {
    container: { overflow: 'hidden', width: '100%', background: '#F7F3ED', padding: '2rem 0' },
    carousel: { display: 'flex', animation: 'scroll 40s linear infinite', width: 'max-content' },
    card: { flex: '0 0 auto', width: '180px', height: '220px', margin: '0 10px', background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '1px solid #ccc', padding: '10px', borderRadius: '6px' },
    image: { width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px' },
};

const HomeCarousel = () => <div style={styles.container}><div style={styles.carousel}>{[...images, ...images].map((image, index) => <div key={index} style={styles.card}><img src={image} alt={`Foto ${index + 1}`} style={styles.image} /></div>)}</div></div>;
export default HomeCarousel;
