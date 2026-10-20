const images = ['images/img2.jpg', 'images/img3.jpg', 'images/img5.jpg', 'images/img6.jpg'];

const HomeGallery = () => <section className="gallery-container"><h1 className="gallery-title">Realizamos calzados especiales en actividades culturales</h1><div className="gallery-grid">{images.map((image) => <div className="polaroid" key={image}><img src={image} alt="Calzado cultural" /><div className="caption" /></div>)}</div></section>;
export default HomeGallery;
