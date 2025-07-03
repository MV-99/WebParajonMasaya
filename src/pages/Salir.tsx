
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import EditIcon from "@mui/icons-material/Edit";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HomeIcon from "@mui/icons-material/Home";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import FavoriteIcon from "@mui/icons-material/Favorite";
import '../styles/polaroids.css'; //el estilo de las polaroids


//estilo de las cards
const cardStyleBase: React.CSSProperties = {
    width: "300px",
    textAlign: "center",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease",
    backgroundColor: "#fff",
};
//fotos culturales
const images = [
    { src: 'images/img2.jpg' },
    { src: 'images/img3.jpg' },
    { src: 'images/img5.jpg' },
    { src: 'images/img6.jpg' },
    
];

const images2 = [
    'images/zapato1.png',
    'images/zapato5.png',
    'images/zapato4.png',
    'images/zapato8.png',
    'images/zapato10.png',
    'images/zapato11.png',
    'images/zapato14.png',
    'images/zapato17.png',
    'images/zapato15.png',
];


const injectKeyframes = () => {
    const styleSheet = document.styleSheets[0];
    const keyframes =
        `@keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
};

const CatalogPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        injectKeyframes();
    }, []); //carrusel
    //cards
    const cards = [
        {
            icon: <LocalShippingIcon style={{ fontSize: 50, color: "#ec4899" }} />,
            title: "Envío a todo el país",
            description: "Llegamos a todos los rincones con rapidez y seguridad",
            backgroundColor: 'white',
        },
        {
            icon: <MilitaryTechIcon style={{ fontSize: 50, color: '#4d82bc' }} />,
            title: "Materiales de alta calidad",
            description: "Seleccionamos solo los mejores materiales para tu confort",
            backgroundColor: 'white',
        },
        {
            icon: <EditIcon style={{ fontSize: 50, color: "#97c1a9" }} />,
            title: "Diseños únicos y personalizables",
            description: "Adapta tu calzado a tu estilo personal",
            backgroundColor: "white",
        },
    ];
    //tips de limpieza
    const tipCards = [
        {
            number: "01",
            title: "Limpieza regular",
            description:
                "Limpia tus zapatos con un paño húmedo o cepillo suave para evitar acumulación de suciedad.",
            bgColor: "#dbeafe",
            icon: <CleaningServicesIcon style={{ fontSize: "32px", color: "#3b82f6" }} />,
        },
        {
            number: "02",
            title: "Almacenamiento adecuado",
            description:
                "Guárdalos en un lugar fresco y seco, preferiblemente en bolsas de tela o cajas ventiladas.",
            bgColor: "#d1fae5",
            icon: <HomeIcon style={{ fontSize: "32px", color: "#10b981" }} />,
        },
        {
            number: "03",
            title: "Protección contra humedad",
            description:
                "Evita exponer tus zapatos al agua. Usa protectores impermeables si es necesario.",
            bgColor: "#ede9fe",
            icon: <UmbrellaIcon style={{ fontSize: "32px", color: "#8b5cf6" }} />,
        },
        {
            number: "04",
            title: "Mantenimiento del material",
            description:
                "Aplica productos especiales para cuero, gamuza o tela según el tipo de calzado.",
            bgColor: "#fef9c3",
            icon: <AutoFixHighIcon style={{ fontSize: "32px", color: "#f59e0b" }} />,
        },
        {
            number: "05",
            title: "Amor y dedicación",
            description:
                "Revisa regularmente tus zapatos y dales el cariño que merecen para alargar su vida útil.",
            bgColor: "#ffe4e6",
            icon: <FavoriteIcon style={{ fontSize: "32px", color: "#ec4899" }} />,
        },
    ];



    //cambio de imagenes en quienes somos

    const imagenes = [
       
     
        'images/zapato36.jpeg',
        'images/zapato37.jpeg',
        'images/zapato38.jpeg',
        'images/zapato39.jpeg',
        'images/zapato40.jpeg',
        'images/zapato41.jpeg',


    ];
    const [indice, setIndice] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndice((prev) => (prev + 1) % imagenes.length);
                setFade(true); // vuelve a fade-in
            }, 500); // tiempo del fade-out
        }, 2000); // segundos

        return () => clearInterval(intervalo);
    }, []);

    //parte de contactanos

    const tarjetaEstilo = {
        background: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        width: '260px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        textAlign: 'center' as const
    };

    const iconoEstilo = (bg: string) => ({
        backgroundColor: bg,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem'
    });


    return (
        <div style={{ fontFamily: '-moz-initial', margin: 0, padding: 0, boxSizing: 'border-box' }}>

            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px 30px',
                backgroundColor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                zIndex: 1000,
            }}>
                <h2 style={{ color: 'black', fontSize: '35px', margin: 0 }}>Parajón</h2>
            </div>

            <div style={{ paddingTop: '100px' }}></div>

            <div style={{
                position: 'relative',
                padding: '100px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                height: '55vh',
                overflow: 'hidden'
            }}>
                {/* Video de fondo */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1
                    }}
                >
                    <source src="/images/negro.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>

                <div style={{
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: '40px',
                    borderRadius: '20px',
                    maxWidth: '800px',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h1 style={{ fontSize: '55px', fontWeight: 'bold', marginBottom: '20px' }}>
                        Calzado Artesanal Parajón
                    </h1>
                    <p style={{ fontSize: '20px', marginBottom: '30px' }}>
                        Descubre nuestra exclusiva colección de calzado. No vendemos en línea, pero te ofrecemos cotizaciones personalizadas y encargos personalizados  para que encuentres el mejor precio para tus zapatos favoritos.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <Button variant="contained" sx={{ backgroundColor: "#F277BA", color: "white", borderRadius: "20px" }} onClick={() => navigate('/cotizacion')}>
                            Solicitar Cotización
                        </Button>
                        <Button variant="contained" sx={{ backgroundColor: "#F277BA", color: "white", borderRadius: "20px" }} onClick={() => navigate('/catalogo')}>
                            Ver  Catálogo
                        </Button>
                        <Button variant="contained" sx={{ backgroundColor: "#F277BA", color: "white", borderRadius: "20px" }} onClick={() => navigate('/ayuda2')}>
                            Ayuda
                        </Button>
                    </div>
                </div>
            </div>
            {/*carrusel correcto*/}
            <div style={styles.container}>
                <div style={styles.carousel}>
                    {[...images2, ...images2].map((image, index) => ( // duplicamos imágenes para que se repita suavemente
                        <div key={index} style={styles.card}>
                            <img src={image} alt={`Foto ${index + 1}`} style={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
            {/*poner parte de tarjetas informativas*/}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "2rem",
                    padding: "2rem",
                    backgroundColor: '#fbd7e5',
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            ...cardStyleBase,
                            backgroundColor: card.backgroundColor,
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                        }}
                    >
                        {card.icon}
                        <h3 style={{ fontSize: "1.2rem", margin: "1rem 0 0.5rem", color: "#111827" }}>
                            {card.title}
                        </h3>
                        <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>{card.description}</p>
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '3rem 1rem',
                    backgroundColor: 'white',
                    flexWrap: 'wrap',
                }}
            >

                <div
                    style={{
                        position: 'relative',
                        width: '45%',
                        maxWidth: '400px',
                        minWidth: '280px',
                        marginBottom: '2rem',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#c4dafa',
                            borderRadius: '12px',
                            zIndex: 0,
                        }}
                    />
                    <img
                        src={imagenes[indice]}
                        alt="Quienes somos"
                        style={{
                            width: '100%',
                            borderRadius: '12px',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            opacity: fade ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    />
                </div>


                <div
                    style={{
                        width: '45%',
                        minWidth: '280px',
                    }}
                >
                    <h2
                        style={{

                            fontSize: '3.2rem',
                            marginBottom: '1rem',
                            color: '#4d82bc'
                        }}
                    >
                        ¿Quiénes somos?
                    </h2>
                    <p
                        style={{
                            color: 'black',
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                        }}
                    >
                        Con más de 15 años de experiencia en el mercado del calzado, Parajón se ha consolidado como una tienda
                        de referencia en la venta de zapatos de calidad✅
                    </p>
                    <p
                        style={{
                            color: 'black',
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                        }}
                    >
                        Nuestra filosofía se basa en ofrecer un servicio personalizado✨, donde cada cliente recibe atención de calidad
                        y los mejores calzados hechos a mano, adaptado a sus necesidades y presupuesto💸
                    </p>
                    <p
                        style={{
                            color: 'black',
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                        }}
                    >
                        En Parajón encontrarás una amplia variedad de estilos🩰 y colores, desde calzado casual hasta elegantes opciones
                        para ocaciones especiales, siempre con la mejor relación calidad-precio.
                    </p>
                </div>
            </div>

            {/*parte de  marketing, polaroidsss*/}
            <div className="gallery-container">
                <h1 className="gallery-title">🌸 Realizamos calzados especiales en actividades culturales🌸</h1>
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div className="polaroid" key={index}>
                            <img src={image.src} />
                            <div className="caption"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/*parte de tips*/}
            <div
                style={{
                    backgroundColor: "#fbe4ff",
                    padding: "3rem 1rem",
                    textAlign: "center",
                }}
            >
                <h2 style={{ fontSize: "3rem", fontWeight: "bold", color: "#111827", marginBottom: "0.5rem" }}>
                    Tips para cuidar tu calzado Parajón
                </h2>
                <p style={{ maxWidth: "700px", margin: "0 auto 2rem", color: "#6b7280", fontSize: "1.2rem" }}>
                    Sigue estos consejos💡 para mantener tus zapatos siempre como nuevos. Una buena práctica de cuidado extiende su vida útil y los mantiene impecables✨
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "1.5rem",
                    }}
                >
                    {tipCards.map((card, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: card.bgColor,
                                width: "220px",
                                padding: "1rem",
                                borderRadius: "1rem",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                                textAlign: "left",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                                <div style={{ fontWeight: "bold", fontSize: "1.1rem", color: "black" }}>
                                    {card.number}
                                </div>
                                <div>{card.icon}</div>
                            </div>
                            <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#111827", marginTop: "0.5rem" }}>
                                {card.title}
                            </h3>
                            <p style={{ fontSize: "0.875rem", color: "#4b5563", marginTop: "0.5rem" }}>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/*parte de contacto*/}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <h2 style={{ color: '#f5a3bd', fontSize: '3.2rem', marginBottom: '0.5rem' }}>Contacto</h2>
                <p style={{ color: '#555', fontSize: '1.2rem' }}>
                    ¿Tienes alguna pregunta💡? No dudes en contactarnos. Estamos aquí para ayudarte.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <div style={tarjetaEstilo}>
                    <div style={iconoEstilo('#ffe6ef')}>
                        <LocationOnIcon style={{ color: '#f5a3bd' }} />
                    </div>
                    <h3 style={{ color: '#111' }}>Dirección</h3>
                    <p style={{ color: '#666', margin: '0.5rem 0' }}>C. del Mercado, Masaya</p>
                    <p style={{ color: '#666', margin: '0.5rem 0' }}>Ubicado en: Mercado Municipal Ernesto Fernandez</p>
                    <a href="https://www.google.com/maps/place/Calzado+Paraj%C3%B3n/@11.973541,-86.0905858,17z/data=!3m1!4b1!4m6!3m5!1s0x8f7408a22e624c15:0x36a22019ecc6499f!8m2!3d11.9735358!4d-86.0880109!16s%2Fg%2F11f0wyr4xl?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3Dl" target="_blank" rel="noopener noreferrer" style={{ color: '#f5a3bd', fontWeight: 'bold', textDecoration: 'none' }}>
                        Ver en mapa
                    </a>
                </div>

                <div style={tarjetaEstilo}>
                    <div style={iconoEstilo('#d6f3ff')}>
                        <PhoneIcon style={{ color: '#ace0f9' }} />
                    </div>
                    <h3 style={{ color: '#111' }}>Teléfono</h3>

                    <p style={{ color: '#666', margin: '0.5rem 0' }}>Tel: +505 89858585</p>
                    <p style={{ color: '#666', margin: '0.5rem 0' }}>Lun - Sab: 9:00 am - 5:30 pm</p>
                    <p style={{ color: '#666', margin: '0.5rem 0' }}>Dom: 9:00 am - 2:00 pm</p>
                    <a href="Tel: +505 89858585" style={{ color: '#ace0f9', fontWeight: 'bold', textDecoration: 'none' }}>
                        Llamar ahora
                    </a>
                </div>

                <div style={tarjetaEstilo}>
                    <div style={iconoEstilo('#e6fff4')}>
                        <EmailIcon style={{ color: '#97c1a9' }} />
                    </div>
                    <h3 style={{ color: '#111' }}>Email</h3>

                    <p style={{ color: '#666', margin: '0.5rem 0' }}>parajonmasaya@gmail.com</p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=parajonmasaya@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#97c1a9', fontWeight: 'bold', textDecoration: 'none' }}
                    >
                        Enviar email
                    </a>

                </div>

                <div style={tarjetaEstilo}>
                    <div style={iconoEstilo('#ffe4ec')}>
                        <InstagramIcon style={{ color: '#ec9fcf' }} />
                    </div>
                    <h3 style={{ color: '#111' }}>Instagram</h3>
                    <p style={{ color: '#666', margin: '0.5rem 0' }}>@parajon_cal</p>
                    <a href="https://www.instagram.com/parajon_cal?igsh=bDZyZ2xxazRiOTE3" target="_blank" rel="noopener noreferrer" style={{ color: '#ec9fcf', fontWeight: 'bold', textDecoration: 'none' }}>
                        Ver perfil
                    </a>
                </div>

                <div style={tarjetaEstilo}>
                    <div style={iconoEstilo('#d6eaff')}>
                        <FacebookIcon style={{ color: '#8ac6ff' }} />
                    </div>
                    <h3 style={{ color: '#111' }}>Facebook</h3>
                    <p style={{ color: '#666', margin: '0.5rem 0' }}>Calzado Parajón </p>
                    <a href="https://www.facebook.com/share/1R8vwUPoLQ/" target="_blank" rel="noopener noreferrer" style={{ color: '#8ac6ff', fontWeight: 'bold', textDecoration: 'none' }}>
                        Ver perfil
                    </a>
                </div>
            </div>

        </div>

    );
};


//estilos carrusel
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        overflow: 'hidden',
        width: '100%',
        background: 'linear-gradient(to right, #ffd1dc, #c1e1ff)',
        padding: '2rem 0',
    },

    carousel: {
        display: 'flex',
        animation: 'scroll 40s linear infinite',
        width: 'max-content',
    },
    card: {
        flex: '0 0 auto',
        width: '180px',
        height: '220px',
        margin: '0 10px',
        background: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        border: '1px solid #ccc',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '6px',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '4px',
        marginBottom: '10px',
    },
};

export default CatalogPage;
