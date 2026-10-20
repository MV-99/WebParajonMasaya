const QuoteRequestIntro = () => (
    <div style={{ flex: 1, minWidth: '300px' }}>
        <h1 style={{ color: '#422B23', fontWeight: 'bold' }}>Solicita tu Cotización</h1>
        <p style={{ marginBottom: '1rem', fontSize: '16px', color: '#000000' }}>
            En Parajón no vendemos directamente en línea. Preferimos ofrecerte un servicio personalizado con las mejores cotizaciones de nuestros calzados y encargos personalizados para que obtengas el mejor precio.
        </p>
        <p style={{ marginBottom: '1rem', fontSize: '16px', color: '#000000' }}>
            Completa el formulario con los detalles del calzado que te interesa y nos pondremos en contacto contigo a la brevedad con una cotización personalizada.
        </p>
        <div style={{ backgroundColor: '#f3e6e4ff', borderRadius: '10px', padding: '1rem', fontSize: '14px' }}>
            <p style={{ fontWeight: 'bold', color: '#DBA1A2', fontSize: '16px' }}>¿Por qué cotizar con nosotros?</p>
            <ul style={{ paddingLeft: '1.2rem', color: 'black', fontSize: '15px' }}>
                <li>Precios competitivos adaptados a tus necesidades</li>
                <li>Atención personalizada y asesoramiento</li>
                <li>Amplio catálogo de modelos</li>
                <li>Encargos y diseños personalizados</li>
                <li>Calzado de calidad y durabilidad hecho a mano!</li>
            </ul>
        </div>
    </div>
);

export default QuoteRequestIntro;
