import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Cotizar = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };
    //para que ingrese todo
    //usando emailjs


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const nombre = form[0] as HTMLInputElement;
        const apellido = form[1] as HTMLInputElement;
        const correo = form[2] as HTMLInputElement;
        const telefono = form[3] as HTMLInputElement;
        const cedula = form[4] as HTMLInputElement;
        const tipoCalzadoSeleccionado = form.querySelector('input[name="tipo"]:checked') as HTMLInputElement | null;
        const talla = form['talla'] as HTMLInputElement;
        const color = form['color'] as HTMLInputElement;
        const descripcion = form['masinfo'] as HTMLTextAreaElement;
        const presupuesto = form['presupuesto'] as HTMLSelectElement;

        if (
            !nombre.value.trim() || !apellido.value.trim() || !correo.value.trim() || !telefono.value.trim() || !cedula.value.trim() ||
            !tipoCalzadoSeleccionado || !talla.value.trim() || !color.value.trim() || !descripcion.value.trim() || !presupuesto.value
        ) {
            alert("Por favor llena todos los campos.");
            return;
        }

        emailjs.send('service_wricvlm', 'template_zm6mquk', {
            nombre: nombre.value,
            apellido: apellido.value,
            correo: correo.value,
            telefono: telefono.value,
            cedula: cedula.value,
            tipo_calzado: tipoCalzadoSeleccionado.value,
            talla: talla.value,
            color: color.value,
            descripcion: descripcion.value,
            presupuesto: presupuesto.value,
            to_email: 'parajonmasaya@gmail.com'
        }, 'XYbec_e_Mz7w1Tbp1')

            .then(() => {
                alert("Formulario enviado con éxito ✅");
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error al enviar correo:', error);
                alert("Hubo un error al enviar el correo.");
            });
    };



    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >    {/*asi se hace la animacion*/}
            <div style={{ padding: '2rem', backgroundColor: '#fff1f9', minHeight: '100vh' }}>
                {/* Icono y título */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <ArrowBackOutlinedIcon
                        onClick={handleBack}
                        style={{ cursor: 'pointer', marginRight: '0.5rem', color: '#ec4899' }}
                    />

                </div>

                {/* Contenido principal */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'space-between'
                }}>
                    {/* Izquierda - Texto */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h1 style={{ color: '#ec4899', fontWeight: 'bold', fontFamily: '-moz-initial' }}>Solicita tu Cotización✨</h1>
                        <p style={{ marginBottom: '1rem', fontSize: '16px', color: '#4b5563', fontWeight: 'inherit' }}>
                            En Parajón no vendemos directamente en línea. Preferimos ofrecerte un servicio personalizado con las mejores cotizaciones  de nuestros calzados y encargos personalizados para que obtengas el mejor precio.
                        </p>
                        <p style={{ marginBottom: '1rem', fontSize: '16px', color: '#4b5563' }}>
                            Completa el formulario con los detalles del calzado que te interesa y nos pondremos en contacto contigo a la brevedad con una cotización personalizada.
                        </p>

                        <div style={{
                            backgroundColor: '#f0f9ff',
                            borderRadius: '10px',
                            padding: '1rem',
                            fontSize: '14px'
                        }}>
                            <p style={{ fontWeight: 'bold', color: '#0ea5e9', fontSize: '16px', fontFamily: '-moz-initial' }}>¿Por qué cotizar con nosotros?</p>
                            <ul style={{ paddingLeft: '1.2rem', color: 'black', fontSize: '15px' }}>
                                <li>Precios competitivos adaptados a tus necesidades</li>
                                <li>Atención personalizada y asesoramiento</li>
                                <li>Amplio catálogo de modelos</li>
                                <li>Encargos y diseños personalizados</li>
                                <li>Calzado de calidad y durabilidad hecho a mano!</li>
                            </ul>
                        </div>
                    </div>

                    {/*  Formulario */}
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            flex: 1,
                            minWidth: '320px',
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '12px',
                            boxShadow: '0 0 10px rgba(0,0,0,0.05)'
                        }}>
                        {/* Nombre y Apellido */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <label style={labelStyle}>Nombre</label>
                                <input
                                    placeholder="Tu nombre"
                                    style={input2}
                                    maxLength={30}
                                    onChange={(e) => {
                                        const soloLetras = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
                                        e.target.value = soloLetras;
                                    }}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={labelStyle}>Apellido</label>
                                <input
                                    placeholder="Tu apellido"
                                    style={input2}
                                    maxLength={30}
                                    onChange={(e) => {
                                        const soloLetras = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
                                        e.target.value = soloLetras;
                                    }}
                                />
                            </div>
                        </div>

                        {/* Correo */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={labelStyle}>Correo electrónico</label>
                            <input
                                placeholder="tu@email.com"
                                style={{ ...inputStyle, width: '95%', border: '1px solid #0ea5e9' }}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                    if (!emailRegex.test(value)) {
                                        e.target.style.border = '2px solid red';
                                    } else {
                                        e.target.style.border = '1px solid #0ea5e9';
                                    }
                                }}
                            />

                        </div>

                        {/* Telefono */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={labelStyle}>Número de teléfono</label>
                            <input
                                placeholder="xxxx-xxxx"
                                maxLength={8}
                                style={{ ...inputStyle, width: '95%', border: '1px solid #0ea5e9', }}
                                onChange={(e) => {
                                    const soloNumeros = e.target.value.replace(/\D/g, '');
                                    e.target.value = soloNumeros;
                                }}
                            />
                        </div>

                        {/* cedula */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={labelStyle}>Cédula de identidad</label>
                            <input
                                placeholder="xxx-xxxxxx-xxxxx"
                                maxLength={16}
                                style={{ ...inputStyle, width: '95%', border: '1px solid pink' }}
                                onChange={(e) => {
                                    let value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
                                    if (value.length > 3 && value.length <= 9) {
                                        value = value.slice(0, 3) + '-' + value.slice(3);
                                    } else if (value.length > 9) {
                                        value = value.slice(0, 3) + '-' + value.slice(3, 9) + '-' + value.slice(9, 14);
                                    }

                                    e.target.value = value;
                                }}
                            />
                        </div>

                        {/* type shoes */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={labelStyle}>Tipo de calzado</label>
                            <div>
                                {['Casual', 'Formal', 'Deportivo', 'Escolar', 'Botas', 'Sandalias'].map((tipo) => (
                                    <label key={tipo} style={{ marginRight: '1rem' }}>
                                        <input type="radio" name="tipo" value={tipo} /> {tipo}
                                    </label>
                                ))}
                            </div>
                        </div>


                        {/* tallas y color */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <label style={labelStyle}>Talla</label>
                                <input
                                    name="talla"
                                    placeholder="Ej: 37"
                                    maxLength={30}
                                    style={{ ...inputStyle, width: '90%', border: '1px solid pink' }}
                                />

                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={labelStyle}>Color</label>
                                <input
                                    name="color"
                                    placeholder="Ej: Negro, Rojo, etc."
                                    maxLength={30}
                                    style={{ ...inputStyle, width: '90%', border: '1px solid pink', }}
                                />
                            </div>
                        </div>

                        {/* more info */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={labelStyle}>Descripción del modelo</label>
                            <textarea
                                name="masinfo"
                                placeholder="Describe el modelo específico,  o cualquier detalle importante del calzado a cotizar"
                                maxLength={300}
                                style={{ ...inputStyle, height: '80px', resize: 'none', width: '95%', border: '1px solid #0ea5e9', }}
                            />
                        </div>

                        {/* money help */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={labelStyle}>Presupuesto estimado</label>
                            <select
                                name="presupuesto"
                                style={{
                                    ...inputStyle,
                                    width: '50%',
                                    border: '1px solid #0ea5e9',
                                }}
                            >
                                <option value="Más de C$200 cordobas">Más de C$200 cordobas</option>
                                <option value="Menos de C$1,000 cordobas">Menos de C$1,000 cordobas</option>
                            </select>
                        </div>


                        {/* Botón de envio */}
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#f472b6',
                                color: 'white',
                                border: 'none',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                width: '100%',
                                cursor: 'pointer',
                                fontSize: '15px'

                            }}
                        >
                            Solicitar Cotización
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    outline: 'none'
};

const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.4rem',
    fontWeight: 600,
    color: 'black'
};
const input2: React.CSSProperties = {
    width: '90%',
    padding: '0.7rem',
    borderRadius: '10px',
    border: '1px solid pink',
    outline: 'none'
};


export default Cotizar;
