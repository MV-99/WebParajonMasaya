import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import CatalogHeader from '../components/CatalogHeader';
import CatalogFilters from '../components/CatalogFilters';
import ShoeGrid from '../components/ShoeGrid';
import QuoteModal from '../components/QuoteModal';
import { shoesData, Shoe } from '../components/catalogData';

const Catalogo = () => {
    const navigate = useNavigate();
    const [color, setColor] = useState('Todos');
    const [category, setCategory] = useState('Todos');
    const [size, setSize] = useState('todos');
    const [gender, setGender] = useState('Todos');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentShoe, setCurrentShoe] = useState<Shoe | null>(null);
    const [reason, setReason] = useState('');
    const [correo, setCorreo] = useState('');

    const filteredShoes = shoesData.filter((shoe) => {
        const matchCategory = category === 'Todos' || shoe.category === category;
        const matchGender = gender === 'Todos' || shoe.gender === gender;
        const matchSize = size === 'todos' || shoe.sizes.includes(Number(size));
        const matchColor = color === 'Todos' || shoe.color === color;
        return matchCategory && matchGender && matchSize && matchColor;
    });

    const clearFilters = () => {
        setColor('Todos');
        setCategory('Todos');
        setSize('todos');
        setGender('Todos');
    };

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
            .send('service_wricvlm', 'template_m8e2vnm', templateParams, 'XYbec_e_Mz7w1Tbp1')
            .then(
                () => {
                    alert(`\u2705 Cotización enviada para "${currentShoe.name}" con motivo: "${reason}"`);
                    setIsModalOpen(false);
                    setReason('');
                    setCorreo('');
                },
                (error) => {
                    console.error('EmailJS Error:', error);
                    alert('\u274c Error al enviar el correo. Intenta nuevamente.');
                }
            );
    };

    const handleQuoteClick = (shoe: Shoe) => {
        setCurrentShoe(shoe);
        setIsModalOpen(true);
    };

    return (
        <main style={{ minHeight: '100vh', padding: '20px', backgroundColor: '#F7F3ED' }}>
            <CatalogHeader onBack={() => navigate('/')} />
            <CatalogFilters
                color={color}
                category={category}
                size={size}
                gender={gender}
                onColorChange={setColor}
                onCategoryChange={setCategory}
                onSizeChange={setSize}
                onGenderChange={setGender}
                onClear={clearFilters}
            />
            <section>
                <h2 style={{ color: '#DBA1A2', marginBottom: '10px' }}>Resultados</h2>
                <p style={{ color: '#DBA1A2', textAlign: 'right' }}>{filteredShoes.length} productos encontrados</p>
                <ShoeGrid shoes={filteredShoes} onQuote={handleQuoteClick} />
            </section>
            <QuoteModal
                isOpen={isModalOpen}
                email={correo}
                reason={reason}
                onEmailChange={setCorreo}
                onReasonChange={setReason}
                onSend={handleSendQuote}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
};

export default Catalogo;
