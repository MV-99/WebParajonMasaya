
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import emailjs from '@emailjs/browser';



//zapatos filtro

type Shoe = {
    id: number;
    name: string;
    price: number;
    image: string;
    gender: "hombre" | "mujer" | "unisex" | "niños";
    type: string;
    sizes: number[];
    color: string;
    category: string;
};
//zapatos a usar 
const shoesData: Shoe[] = [
    {
        id: 1,
        name: "Sandalias de tacones color negro",
        price: 650,
        image: "/images/zapato1.png",
        gender: "mujer",
        type: "sandalia",
        sizes: [38, 39],
        color: "negro",
        category: "sandalia",
    },
    {
        id: 2,
        name: "Zapatos de lazos color rojo",
        price: 350,
        image: "/images/zapato2.png",
        gender: "niños",
        type: "formal",
        sizes: [34, 35],
        color: "rojo",
        category: "formal",
    },
    {
        id: 3,
        name: "Sandalias Verano Suave",
        price: 550,
        image: "/images/zapato3.png",
        gender: "mujer",
        type: "sandalia",
        sizes: [38, 39, 40],
        color: "negro",
        category: "sandalia",
    },
    {
        id: 4,
        name: "Botas elegantes color cafe",
        price: 700,
        image: "/images/zapato4.png",
        gender: "unisex",
        type: "botas",
        sizes: [39, 40, 41],
        color: "cafe",
        category: "botas",
    },
    {
        id: 5,
        name: "Tennis comodos color azul",
        price: 550,
        image: "/images/zapato5.png",
        gender: "hombre",
        type: "casual",
        sizes: [38, 39, 40],
        color: "azul",
        category: "casual",
    },   //recorda hacer cambios 
    {
        id: 6,
        name: "Zapatillas Formales Elegantes",
        price: 770,
        image: "/images/zapato6.png",
        gender: "hombre",
        type: "zapatillas",
        sizes: [40, 41, 42, 43, 44],
        color: "cafe",
        category: "zapatillas",
    },
    {
        id: 7,
        name: "Zapatos escolares sin faja ",
        price: 450,
        image: "/images/zapato7.png",
        gender: "mujer",
        type: "escolar",
        sizes: [38, 39],
        color: "negro",
        category: "escolar",
    },
    {
        id: 8,
        name: "Sandalias de tacones con lazos",
        price: 850,
        image: "/images/zapato8.png",
        gender: "mujer",
        type: "sandalia",
        sizes: [39, 40],
        color: "blanco",
        category: "sandalia",
    },
    {
        id: 9,
        name: "Zapatos de suela gruesa comodos",
        price: 500,
        image: "/images/zapato9.png",
        gender: "mujer",
        type: "casual",
        sizes: [38, 39, 41],
        color: "cafe",
        category: "casual",
    },
    {
        id: 10,
        name: "Zapatos de tacones color rojo",
        price: 650,
        image: "/images/zapato10.png",
        gender: "mujer",
        type: "formal",
        sizes: [38, 39],
        color: "rojo",
        category: "formal",
    },
    {
        id: 11,
        name: "Zapatos de tacones color negro",
        price: 700,
        image: "/images/zapato11.png",
        gender: "mujer",
        type: "formal",
        sizes: [36, 37, 38, 39],
        color: "negro",
        category: "formal",
    },
    {
        id: 12,
        name: "Zapatillas comodas color crema",
        price: 450,
        image: "/images/zapato12.png",
        gender: "mujer",
        type: "zapatillas",
        sizes: [39, 40, 41, 42],
        color: "crema",
        category: "zapatillas",
    },
    {
        id: 13,
        name: "Zapatos comodos color negro",
        price: 500,
        image: "/images/zapato13.png",
        gender: "mujer",
        type: "casual",
        sizes: [37, 38, 39, 40],
        color: "negro",
        category: "casual",
    },
    {
        id: 14,
        name: "Zapatos color crema de tacones",
        price: 700,
        image: "/images/zapato14.png",
        gender: "mujer",
        type: "formal",
        sizes: [38, 39],
        color: "crema",
        category: "formal",
    },
    {
        id: 15,
        name: "Zapatos de tacones con fajas color negro",
        price: 650,
        image: "/images/zapato15.png",
        gender: "mujer",
        type: "formal",
        sizes: [36, 37, 38],
        color: "negro",
        category: "formal",
    },
    {
        id: 16,
        name: "Zapatos de suela baja con accesorio plateado",
        price: 500,
        image: "/images/zapato16.png",
        gender: "mujer",
        type: "zapatillas",
        sizes: [39, 40, 41],
        color: "cafe",
        category: "zapatillas",
    },
    {
        id: 17,
        name: "Botas de amarre color cafe",
        price: 900,
        image: "/images/zapato17.png",
        gender: "hombre",
        type: "botas",
        sizes: [39, 40, 41, 42],
        color: "cafe",
        category: "botas",
    },
    {
        id: 18,
        name: "Zapatos Formales de color negro",
        price: 700,
        image: "/images/zapato18.png",
        gender: "hombre",
        type: "formal",
        sizes: [40, 41, 42, 43, 44],
        color: "negro",
        category: "formal",
    },
    {
        id: 19,
        name: "Zapatos de amarre elegante color azul",
        price: 700,
        image: "/images/zapato19.png",
        gender: "hombre",
        type: "formal",
        sizes: [39, 40, 41, 42, 43, 44,],
        color: "azul",
        category: "formal",
    },
    {
        id: 20,
        name: "Zapatos escolares de lazo",
        price: 450,
        image: "/images/zapato20.png",
        gender: "mujer",
        type: "escolar",
        sizes: [38, 39, 40],
        color: "negro",
        category: "escolar",
    },
    {
        id: 21,
        name: "Zapatos formales de amarre color azul",
        price: 750,
        image: "/images/zapato21.png",
        gender: "hombre",
        type: "formal",
        sizes: [39, 40, 41, 42],
        color: "azul",
        category: "formal",
    },
    {
        id: 22,
        name: "Zapatos Formales con lazos brillantes",
        price: 450,
        image: "/images/zapato22.png",
        gender: "niños",
        type: "formal",
        sizes: [34, 35,],
        color: "amarillo",
        category: "formal",
    },
    {
        id: 23,
        name: "Zapatos bajos de amarre color cafe ",
        price: 650,
        image: "/images/zapato23.png",
        gender: "hombre",
        type: "formal",
        sizes: [39, 40, 41, 42, 43,],
        color: "cafe",
        category: "formal",
    },
    {
        id: 24,
        name: "Sandalias de fajas altas color azul",
        price: 700,
        image: "/images/zapato24.png",
        gender: "mujer",
        type: "sandalia",
        sizes: [37, 38, 39],
        color: "azul",
        category: "sandalia",
    },
    {
        id: 25,
        name: "Zapatillas color negro  con accesorio plateado",
        price: 500,
        image: "/images/zapato25.png",
        gender: "mujer",
        type: "zapatillas",
        sizes: [36, 37, 38,],
        color: "negro",
        category: "zapatillas",
    },
    {
        id: 26,
        name: "Zapatos con lazos brillantes de faja",
        price: 500,
        image: "/images/zapato26.png",
        gender: "niños",
        type: "formal",
        sizes: [36, 37],
        color: "gris",
        category: "formal",
    },
    {
        id: 27,
        name: "Zapatos de suela gruesa comodos color negro",
        price: 500,
        image: "/images/zapato27.png",
        gender: "mujer",
        type: "casual",
        sizes: [37, 38, 39],
        color: "negro",
        category: "casual",
    },
    {
        id: 28,
        name: "Zapatos suela gruesa con accesorio dorado",
        price: 600,
        image: "/images/zapato28.png",
        gender: "mujer",
        type: "formal",
        sizes: [38, 39, 40],
        color: "negro",
        category: "formal",
    },
    {
        id: 29,
        name: "Botas de amarre color azul",
        price: 700,
        image: "/images/zapato29.png",
        gender: "hombre",
        type: "botas",
        sizes: [39, 40, 41, 42, 43],
        color: "azul",
        category: "botas",
    },
    {
        id: 30,
        name: "Zapatos escolares de faja",
        price: 400,
        image: "/images/zapato30.png",
        gender: "mujer",
        type: "escolar",
        sizes: [37, 38, 39],
        color: "negro",
        category: "escolar",
    },
    {
        id: 31,
        name: "Zapatos escolares de faja y lazo",
        price: 450,
        image: "/images/zapato31.png",
        gender: "niños",
        type: "escolar",
        sizes: [34, 35],
        color: "negro",
        category: "escolar",
    },
    {
        id: 32,
        name: "Zapatos de lazos sin faja",
        price: 500,
        image: "/images/zapato32.png",
        gender: "mujer",
        type: "escolar",
        sizes: [37, 38, 39],
        color: "negro",
        category: "escolar",
    },
    {
        id: 33,
        name: "Zapatos escolares con faja y lazo",
        price: 500,
        image: "/images/zapato33.png",
        gender: "mujer",
        type: "escolar",
        sizes: [34, 35, 36, 37, 38, 39],
        color: "negro",
        category: "escolar",
    },
    {
        id: 34,
        name: "Zapatos escolares sin faja",
        price: 400,
        image: "/images/zapato34.png",
        gender: "mujer",
        type: "escolar",
        sizes: [38, 39],
        color: "negro",
        category: "escolar",
    },
    {
        id: 35,
        name: "Zapatos escolares de faja y sin faja",
        price: 400,
        image: "/images/zapato35.png",
        gender: "mujer",
        type: "escolar",
        sizes: [36, 37, 38, 39],
        color: "negro",
        category: "escolar",
    },
];
const Catalogo = () => {

    //otras constantes
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };
    //parte de los filtros
    const [color, setColor] = useState("Todos");
    const [category, setCategory] = useState("Todos");
    const [size, setSize] = useState("todos");
    const [gender, setGender] = useState("Todos");

    //modal part
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentShoe, setCurrentShoe] = useState<Shoe | null>(null);
    const [reason, setReason] = useState("");
    const [correo, setCorreo] = useState(""); //el del correo que añadi de razon 

    const handleCotizarClick = (shoe: Shoe) => {
        setCurrentShoe(shoe);
        setIsModalOpen(true);
    };
    //parte de enviar-------------------------------------------------------------------
    const handleSendQuote = () => {
        if (!currentShoe) return;

        const templateParams = {
            shoe_name: currentShoe.name,
            user_email: correo,
            message: reason,
            to_email: 'parajonmasaya@gmail.com',
            shoe_talla: currentShoe.sizes,
            shoe_precio: currentShoe.price,
            shoe_color: currentShoe.color,
            shoe_categoria: currentShoe.gender,


        };

        emailjs
            .send(
                'service_wricvlm',
                'template_m8e2vnm',
                templateParams,
                'XYbec_e_Mz7w1Tbp1'
            )
            .then(
                () => {
                    alert(`✅ Cotización enviada para "${currentShoe.name}" con motivo: "${reason}"`);
                    setIsModalOpen(false);
                    setReason('');
                    setCorreo('');
                },
                (error) => {
                    console.error('EmailJS Error:', error);
                    alert('❌ Error al enviar el correo. Intenta nuevamente.');
                }
            );
    };


    //parte de los filtros
    const filteredShoes = shoesData.filter((shoe) => {
        const matchCategory = category === "Todos" || shoe.category === category;
        const matchGender = gender === "Todos" || shoe.gender === gender;
        const matchSize = size === "todos" || shoe.sizes.includes(Number(size));
        const matchColor = color === "Todos" || shoe.color === color;
        return matchCategory && matchGender && matchSize && matchColor;;
    });

    const clearFilters = () => {
        setColor("Todos");
        setCategory("Todos");
        setSize("todos");
        setGender("Todos");
    };

    return (

        <div style={{ minHeight: "100vh", padding: "20px", fontFamily: '-moz-initial', backgroundColor: '#ffeefa' }}>
            <ArrowBackOutlinedIcon
                onClick={handleBack}
                style={{ cursor: 'pointer', marginRight: '0.5rem', color: '#ec4899' }}
            />
            <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "black" }}>
                ❤️Catálogo de Zapatos❤️
            </h1>

            <h3 style={{ textAlign: 'center', color: 'gray', fontWeight: 'bold' }}>¡Descubre nuestros diferentes estilos ✨y precios amigables a tu bolsillo💸!</h3>

            {/* Filtros */}
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", margin: "20px 0" }}>
                <h2 style={{ color: "black", marginBottom: "10px" }}>Filtros</h2>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <select value={color} onChange={(e) => setColor(e.target.value)} style={selectStyle}>
                        <option>Todos</option>
                        <option value="rojo">Rojo</option>
                        <option value="rosado">Rosado</option>
                        <option value="negro">Negro</option>
                        <option value="gris">Gris</option>
                        <option value="blanco">Blanco</option>
                        <option value="azul">Azul</option>
                        <option value="celeste">Celeste</option>
                        <option value="verde">Verde</option>
                        <option value="amarillo">Amarillo</option>
                        <option value="naranja">Naranja</option>
                        <option value="crema">Crema</option>
                        <option value="cafe">Cafe</option>


                    </select>

                    <select value={category} onChange={(e) => setCategory(e.target.value)} style={selectStyle}>
                        <option>Todos</option>
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="sandalia">Sandalias</option>
                        <option value="deportivo">Deportivo</option>
                        <option value="botas">Botas</option>
                        <option value="zapatillas">Zapatillas</option>
                        <option value="plataforma">Plataforma</option>
                        <option value="tennis">Tennis</option>
                        <option value="escolar">Escolar</option>
                        <option value="tradicional"> Folklore</option>
                        <option value="hipico">Hipicas</option>
                        <option value="desfiles"> Desfiles </option>
                    </select>

                    <select value={size} onChange={(e) => setSize(e.target.value)} style={selectStyle}>
                        <option value="todos">Todos</option>
                        {[33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>

                    <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle}>
                        <option>Todos</option>
                        <option value="mujer">Mujer</option>
                        <option value="hombre">Hombre</option>
                        <option value="unisex">Unisex</option>
                        <option value="niños">Niños</option>
                    </select>

                    <button onClick={clearFilters} style={clearButtonStyle}>Limpiar filtros</button>
                </div>
            </div>

            {/* Resultados */}
            <h2 style={{ color: "#ff69b4", marginBottom: "10px" }}>Resultados</h2>
            <p style={{ color: "#ff69b4", textAlign: "right" }}>{filteredShoes.length} productos encontrados</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
                {filteredShoes.map((shoe) => (
                    <div key={shoe.id} style={cardStyle}>
                        <div style={{ position: "relative", width: "100%", height: "200px", backgroundColor: "#eee", borderRadius: "8px", overflow: "hidden" }}>
                            <img src={shoe.image} alt={shoe.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            <span style={{ position: "absolute", top: "8px", right: "8px", backgroundColor: "black", color: "white", padding: "2px 6px", borderRadius: "5px", fontSize: "12px" }}>
                                {shoe.gender}
                            </span>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>{shoe.name}</h3>
                            <p style={{ color: "green", fontWeight: "bold" }}>C${shoe.price.toFixed(2)}</p>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
                                {shoe.sizes.map((size) => (
                                    <span key={size} style={sizeBadgeStyle}>{size}</span>
                                ))}
                            </div>

                            <button onClick={() => handleCotizarClick(shoe)} style={quoteButtonStyle}>Cotizar</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <h2 style={{ color: "black", marginBottom: "10px" }}>Razón de la cotización💡</h2>
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="Escribe tu correo electronico porfavor..."
                            style={{
                                padding: "10px",
                                width: "98%",
                                marginBottom: "10px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                            }}
                        />
                        <input
                            type="text"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Escribe la consulta porfavor..."
                            style={{
                                padding: "30px",
                                width: "88%",
                                marginBottom: "10px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                            }}
                        />
                        <button
                            onClick={() => {
                                const correoValido =
                                    correo.trim() !== "" &&
                                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim());

                                if (reason.trim() !== "" && correoValido) {
                                    handleSendQuote();
                                } else {
                                    alert("Por favor escribe una razón y un correo válido  antes de enviar ❌");
                                }
                            }}
                            style={{
                                ...quoteButtonStyle,
                                width: "50%",
                                marginBottom: "10px",
                                backgroundColor: "black",
                            }}
                        >
                            Enviar
                        </button>



                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                width: "50%",
                                padding: "10px",
                                borderRadius: "20px",
                                border: "1px solid white",
                                backgroundColor: "white",
                                color: "#ff69b4",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>


    );

};
export default Catalogo;
const selectStyle: React.CSSProperties = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    flex: "1",
};

const clearButtonStyle: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: 'white'

};

const cardStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const sizeBadgeStyle: React.CSSProperties = {
    backgroundColor: "#f0f0f0",
    padding: "5px 8px",
    borderRadius: "20px",
    fontSize: "12px",
};

const quoteButtonStyle: React.CSSProperties = {
    marginTop: "10px",
    backgroundColor: "#ff69b4",
    color: "white",
    border: "none",
    borderRadius: "20px",
    padding: "10px",
    cursor: "pointer",
    width: '100%'
};

const modalOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
};


//install npm install @emailjs/browser
