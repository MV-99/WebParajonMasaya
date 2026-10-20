import React from 'react';
import emailjs from 'emailjs-com';

type QuoteRequestFormProps = { onSuccess: () => void };

const inputStyle: React.CSSProperties = { width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #DBA1A2', outline: 'none' };
const labelStyle: React.CSSProperties = { display: 'block', marginBottom: '0.4rem', fontWeight: 600, color: 'black' };

const QuoteRequestForm = ({ onSuccess }: QuoteRequestFormProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const value = (name: string) => (form.elements.namedItem(name) as HTMLInputElement)?.value.trim();
        const type = form.querySelector('input[name="tipo"]:checked') as HTMLInputElement | null;
        const fields = ['nombre', 'apellido', 'correo', 'telefono', 'cedula', 'talla', 'color', 'masinfo', 'presupuesto'];
        if (fields.some((field) => !value(field)) || !type) {
            alert('Por favor llena todos los campos.');
            return;
        }
        emailjs.send('service_wricvlm', 'template_zm6mquk', {
            nombre: value('nombre'), apellido: value('apellido'), correo: value('correo'),
            telefono: value('telefono'), cedula: value('cedula'), tipo_calzado: type.value,
            talla: value('talla'), color: value('color'), descripcion: value('masinfo'),
            presupuesto: value('presupuesto'), to_email: 'parajonmasaya@gmail.com',
        }, 'XYbec_e_Mz7w1Tbp1').then(() => {
            alert('Formulario enviado con éxito.');
            onSuccess();
        }).catch((error) => {
            console.error('Error al enviar correo:', error);
            alert('Hubo un error al enviar el correo.');
        });
    };

    const lettersOnly = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    };

    return (
        <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: '320px', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}><label style={labelStyle}>Nombre</label><input name="nombre" placeholder="Tu nombre" style={inputStyle} maxLength={30} onChange={lettersOnly} /></div>
                <div style={{ flex: 1 }}><label style={labelStyle}>Apellido</label><input name="apellido" placeholder="Tu apellido" style={inputStyle} maxLength={30} onChange={lettersOnly} /></div>
            </div>
            <label style={labelStyle}>Correo electrónico</label>
            <input name="correo" type="email" placeholder="tu@email.com" style={{ ...inputStyle, marginBottom: '1rem' }} onChange={(event) => { event.target.style.border = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value) ? '1px solid #DBA1A2' : '2px solid red'; }} />
            <label style={labelStyle}>Número de teléfono</label>
            <input name="telefono" placeholder="xxxx-xxxx" maxLength={8} style={{ ...inputStyle, marginBottom: '1rem' }} onChange={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }} />
            <label style={labelStyle}>Cédula de identidad</label>
            <input name="cedula" placeholder="xxx-xxxxxx-xxxxx" maxLength={16} style={{ ...inputStyle, marginBottom: '1rem' }} onChange={(event) => {
                let value = event.target.value.replace(/[^a-zA-Z0-9]/g, '');
                if (value.length > 3 && value.length <= 9) value = `${value.slice(0, 3)}-${value.slice(3)}`;
                else if (value.length > 9) value = `${value.slice(0, 3)}-${value.slice(3, 9)}-${value.slice(9, 14)}`;
                event.target.value = value;
            }} />
            <label style={labelStyle}>Tipo de calzado</label>
            <div style={{ marginBottom: '1rem' }}>{['Casual', 'Formal', 'Deportivo', 'Escolar', 'Botas', 'Sandalias'].map((type) => <label key={type} style={{ marginRight: '1rem' }}><input type="radio" name="tipo" value={type} /> {type}</label>)}</div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}><label style={labelStyle}>Talla</label><input name="talla" placeholder="Ej: 37" style={inputStyle} /></div>
                <div style={{ flex: 1 }}><label style={labelStyle}>Color</label><input name="color" placeholder="Ej: Negro, Rojo, etc." style={inputStyle} /></div>
            </div>
            <label style={labelStyle}>Descripción del modelo</label>
            <textarea name="masinfo" placeholder="Describe el modelo específico, o cualquier detalle importante del calzado a cotizar" maxLength={300} style={{ ...inputStyle, height: '80px', resize: 'none', marginBottom: '1rem' }} />
            <label style={labelStyle}>Presupuesto estimado</label>
            <select name="presupuesto" style={{ ...inputStyle, width: '50%', marginBottom: '1rem' }}>
                <option value="Más de C$200 cordobas">Más de C$200 cordobas</option>
                <option value="Menos de C$1,000 cordobas">Menos de C$1,000 cordobas</option>
            </select>
            <button type="submit" style={{ backgroundColor: '#422B23', color: 'white', border: 'none', padding: '0.8rem', borderRadius: '8px', width: '100%', cursor: 'pointer', fontSize: '15px' }}>Solicitar Cotización</button>
        </form>
    );
};

export default QuoteRequestForm;
