import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const Ayuda2 = () => {
    const handleClick3 = () => {
        window.open("https://mail.google.com/mail/?view=cm&to=parajonmasaya@gmail.com", "_blank");
    };

    return (
        <>
            <ArrowBackIcon
                onClick={() => window.history.back()}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    fontSize: '30px',
                    color: '#422B23',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}
            >
                <motion.h1
                    style={{
                        color: '#422B23',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                    }}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <StarOutlinedIcon style={{
                        fontSize: '40px', color: '#422B23', fontFamily: '-moz-initial'
                    }} />
                    Centro de Ayuda Parajón
                    <StarOutlinedIcon style={{ fontSize: '40px', color: '#422B23' }} />
                </motion.h1>

                <p style={{ textAlign: 'center', color: '#5E5E5E' }}>
                    Aquí encontrarás información útil 💡sobre cómo usar la página de Parajón ✨
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h2 style={{ color: '#DBA1A2', }}>Preguntas Frecuentes</h2>

                    {[
                        {
                            question: "¿Cómo realizo una cotización?",
                            answer:
                                "Para realizar una cotización fuera del catálogo de zapatos, ve al apartado superior de la pantalla y selecciona Solicitar Cotización. Esto te llevará a una pantalla donde podrás registrar tu cotización de forma libre.",
                        },
                        {
                            question: "¿Cómo realizo una cotización desde el catálogo de zapatos?",
                            answer:
                                "En el zapato que sea de tu preferencia, selecciona el botón rosado Cotizar. Una vez presionado, rellena los campos solicitados con información de la cotización y presiona el botón de Enviar Cotización.",
                        },
                        {
                            question: "¿Cómo realizo un encargo?",
                            answer:
                                "Para realizar un encargo, ve a la parte superior de la página y selecciona el botón de Solicitar Cotización. Esto te llevará a una pantalla de cotizar. No te preocupes, rellena los campos y escribe las especificaciones de tu encargo. ¡Nos pondremos en contacto contigo! No te olvides de presionar el botón rosa para enviar.",
                        },
                        {
                            question: "¿Cómo me puedo contactar con la tienda?",
                            answer:
                                "Ve a la parte final de la página. En el apartado de contactos te indicamos cada uno de los medios que disponemos para que te comuniques con nosotros. ¡Gracias por escoger a Parajón!",
                        },
                    ].map((faq, index) => (
                        <motion.details
                            key={index}
                            style={{ marginBottom: '10px', cursor: 'pointer' }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        >
                            <summary style={{ fontWeight: 'bold' }}>{faq.question}</summary>
                            <p style={{ marginTop: '5px', color: '#555' }}>{faq.answer}</p>
                        </motion.details>
                    ))}
                </motion.div>

                <motion.div
                    style={{ marginTop: '20px', textAlign: 'center' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <p style={{ color: '#DBA1A2', fontWeight: 'bold' }}>
                        Si no encuentras lo que buscas, contáctanos para más ayuda💡 ¡Saludos!
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: '20px',
                        }}
                    >
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: '#DBA1A2',
                                color: 'white',
                                borderRadius: '20px',
                            }}
                            onClick={handleClick3}
                        >
                            <EmailOutlinedIcon style={{ color: 'black' }} />
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Ayuda2;
