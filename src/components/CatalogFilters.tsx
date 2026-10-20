import React from 'react';

type CatalogFiltersProps = {
    color: string;
    category: string;
    size: string;
    gender: string;
    onColorChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    onSizeChange: (value: string) => void;
    onGenderChange: (value: string) => void;
    onClear: () => void;
};

const selectStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #422B23',
    flex: '1',
};

const clearButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#422B23',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bolder',
};

const CatalogFilters = ({
    color,
    category,
    size,
    gender,
    onColorChange,
    onCategoryChange,
    onSizeChange,
    onGenderChange,
    onClear,
}: CatalogFiltersProps) => (
    <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
        <h2 style={{ color: '#422B23', marginBottom: '10px' }}>Filtros</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <select value={color} onChange={(event) => onColorChange(event.target.value)} style={selectStyle}>
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
            <select value={category} onChange={(event) => onCategoryChange(event.target.value)} style={selectStyle}>
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
                <option value="tradicional">Folklore</option>
                <option value="hipico">Hipicas</option>
                <option value="desfiles">Desfiles</option>
            </select>
            <select value={size} onChange={(event) => onSizeChange(event.target.value)} style={selectStyle}>
                <option value="todos">Todos</option>
                {[33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map((shoeSize) => (
                    <option key={shoeSize} value={shoeSize}>{shoeSize}</option>
                ))}
            </select>
            <select value={gender} onChange={(event) => onGenderChange(event.target.value)} style={selectStyle}>
                <option>Todos</option>
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="unisex">Unisex</option>
                <option value="niños">Niños</option>
            </select>
            <button onClick={onClear} style={clearButtonStyle}>Limpiar filtros</button>
        </div>
    </section>
);

export default CatalogFilters;
