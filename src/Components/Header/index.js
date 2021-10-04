import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div style={{ height: '50px', background: '#f8f8f8', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: "center", }} >
      <Link to="/" style={{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', marginLeft: '64px' }}>Home</Link>
      <Link to="/" style={{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', marginLeft: '64px' }}>Propostas</Link>
      <Link to="/" style={{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', marginLeft: '64px' }}>Treinamento</Link>
      <Link to="/config" style={{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', marginLeft: '64px' }}>Configurações</Link>
    </div>
  );
}

