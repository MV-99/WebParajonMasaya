import React from 'react';

type QuoteModalProps = {
    isOpen: boolean;
    email: string;
    reason: string;
    onEmailChange: (value: string) => void;
    onReasonChange: (value: string) => void;
    onSend: () => void;
    onClose: () => void;
};

const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    width: '400px',
    textAlign: 'center',
};

const QuoteModal = ({
    isOpen,
    email,
    reason,
    onEmailChange,
    onReasonChange,
    onSend,
    onClose,
}: QuoteModalProps) => {
    if (!isOpen) return null;

    const handleSend = () => {
        const validEmail = email.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
        if (reason.trim() !== '' && validEmail) {
            onSend();
        } else {
            alert('Por favor escribe una razón y un correo válido antes de enviar.');
        }
    };

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <h2 style={{ color: '#422B23', marginBottom: '10px' }}>Razón de la cotización</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => onEmailChange(event.target.value)}
                    placeholder="Escribe tu correo electronico porfavor..."
                    style={{ padding: '10px', width: '98%', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc', outline: 'none' }}
                />
                <input
                    type="text"
                    value={reason}
                    onChange={(event) => onReasonChange(event.target.value)}
                    placeholder="Escribe la consulta porfavor..."
                    style={{ padding: '30px', width: '88%', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc', outline: 'none' }}
                />
                <button onClick={handleSend} style={{ width: '50%', marginBottom: '10px', padding: '10px', borderRadius: '20px', border: 'none', backgroundColor: '#422B23', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                    Enviar
                </button>
                <button onClick={onClose} style={{ width: '50%', padding: '10px', borderRadius: '20px', border: '1px solid white', backgroundColor: 'white', color: '#422B23', fontWeight: 'bold', cursor: 'pointer' }}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default QuoteModal;
