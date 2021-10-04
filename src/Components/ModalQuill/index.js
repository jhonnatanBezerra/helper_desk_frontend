import React, { useRef, useState } from 'react';
import ReactQuill from "react-quill";
import QuillToolbar, { formats, modules } from '../PersonalQuillToolbar';
import { Api } from '../../Services/Api';
import { GrClose } from 'react-icons/gr'
import "react-quill/dist/quill.snow.css";

export const ModalQuill = ({ closeModal }) => {


  const quillRef = useRef();
  const [namePlan, setNamePlan] = useState(null);


  const savePlan = async (e) => {

    e.preventDefault();

    const data = {
      "nomePlano": namePlan,
      "contentDelta": JSON.stringify(getDeltaQuill()),
    }

    try {
      await Api.post('create_plans', data);
      closeModal();
    } catch (error) {
      console.log('SavePlan error ', error);
    }

  }

  const getDeltaQuill = () => {
    const editor = quillRef.current.getEditor();
    return editor.getContents().ops;
  }

  return (
    <div style={{ background: 'rgba(0,0,0,0.3)', position: 'absolute', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <div style={{ background: '#f8f8f8', height: '100%', width: '35%', position: 'relative', padding: '.5rem', display: 'flex', flexDirection: 'column' }}>

        <GrClose style={{ position: 'absolute', fontSize: '22px', top: '4px', right: '4px', cursor: 'pointer' }} onClick={closeModal} />

        <h1 style={{ textAlign: 'center', marginBottom: '16px' }}>Novo plano</h1>

        <QuillToolbar />

        <input type="text" placeholder="Nome do plano" onChange={e => setNamePlan(e.target.value)} style={{ height: '50px', padding: '0 .5rem', border: '1px solid #ccc', fontSize: '1rem', background: 'transparent', }} />

        <div style={{ flex: 1, overflow: 'auto', }}>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            placeholder={"Detalhes do modelo de proposta"}
            modules={modules}
            formats={formats}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <button onClick={savePlan} style={{ cursor: 'pointer', padding: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc', marginRight: '4px', marginTop: '8px' }}>Salvar</button>

          <button onClick={closeModal} style={{ cursor: 'pointer', padding: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc', marginLeft: '4px', marginTop: '8px' }}>Cancelar</button>
        </div>

      </div>
    </div>
  )
}

