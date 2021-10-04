import React from 'react';
import InputMask from "react-input-mask";

export const PersonalInput = ({ label, setChange }) => {
  return (
    <div style={{ minHeight: '60px', display: 'flex', flexDirection: 'column', marginBottom: '16px', }}>
      <label>{label}</label>
      <input type="text" onChange={e => setChange(e.target.value)} style={{ height: '50px', padding: '0 .5rem', border: '1px solid #ccc', fontSize: '1rem', borderRadius: '4px', background: 'rgba(0,0,0,0.1)' }} />
    </div>
  );
}

export const PersonalSelect = ({ optionsList, label, setSelected }) => {


  return (
    <>
      {optionsList &&
        <div style={{ minHeight: '60px', display: 'flex', flexDirection: 'column', marginBottom: '16px', }}>
          <label>{label}</label>
          <select type="text" onChange={e => setSelected(parseInt(e.target.value))} style={{ height: '50px', padding: '0 .5rem', border: '1px solid #ccc', fontSize: '1rem', borderRadius: '4px', background: 'rgba(0,0,0,0.1)' }} >
            {optionsList.map((option) => (
              <option key={option.id} value={option.id}>{option.nome}</option>
            ))}
          </select>
        </div>
      }
    </>
  )
}

export const PersonalInputCNPJ = ({ label, setChange }) => {
  return (
    <div style={{ minHeight: '60px', display: 'flex', flexDirection: 'column', marginBottom: '16px', }}>
      <label>{label}</label>
      <InputMask mask="99.999.999/9999-99" onChange={e => setChange(e.target.value)} style={{ height: '50px', padding: '0 .5rem', border: '1px solid #ccc', fontSize: '1rem', borderRadius: '4px', background: 'rgba(0,0,0,0.1)' }} />
    </div>
  );
}

export const PersonalInputTelephone = ({ label, setChange }) => {
  return (
    <div style={{ minHeight: '60px', display: 'flex', flexDirection: 'column', marginBottom: '16px', }}>
      <label>{label}</label>
      <InputMask mask="(99) 9999-9999" onChange={e => setChange(e.target.value)} style={{ height: '50px', padding: '0 .5rem', border: '1px solid #ccc', fontSize: '1rem', borderRadius: '4px', background: 'rgba(0,0,0,0.1)' }} />
    </div>
  );
}