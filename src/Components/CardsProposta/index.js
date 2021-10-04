import React from 'react';
import { format } from 'date-fns';
import { functions } from '../../Assets/functions';
import { Link } from 'react-router-dom';
import './styles.css'


export const CardsProposta = ({ data }) => {

  console.log(data.status_descricao);

  return (

    <Link id="cardProposta" to={`/proposta/${data.id}`} >
      <h1 style={{ fontSize: '1.375rem', textAlign: 'center' }} >{functions.limit(data.nome_empresa, 15)} - {data.responsavel} - {data.telefone} </h1>
      <strong style={{ textAlign: 'center', marginTop: '8px' }}>Status da proposta: {data.status_descricao} </strong>
      <strong style={{ position: 'absolute', right: '8px', bottom: '4px' }}>{format(new Date(data.created_at), 'dd/MM/yyyy HH:mm')}</strong>
    </Link>
  );
}

