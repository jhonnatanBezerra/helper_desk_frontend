import React, { useEffect, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Header } from '../../Components/Header';
import ReactQuill from "react-quill";
import QuillToolbar, { formats, modules } from '../../Components/PersonalQuillToolbar';
import { Api } from '../../Services/Api';

export const PropostaView = () => {

  const { id } = useParams();

  const quillRef = useRef();

  const [data, setData] = useState(null);

  useEffect(() => {
    getProposal();

  }, []);

  const getProposal = async () => {

    try {
      const { data } = await Api.get(`list_propsal_by_id&id=${id}`);
      setData(data);
      loadDeltaQuill(data.proposta_delta);
    } catch (error) {
      console.log('Get proposal error ', error);
    }

  }

  const loadDeltaQuill = (txt) => {
    const editor = quillRef.current.getEditor();
    quillRef.current.setEditorContents(editor, JSON.parse(txt));
  }

  return (

    <div style={{ background: '#f8f8f8', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }} >
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 50px)', }}>
        <h1 style={{ textAlign: 'center' }}>{data && data.nome_empresa}</h1>
        <QuillToolbar />
        <div style={{ flex: 1, overflow: 'auto', }}>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            placeholder={"Detalhes do modelo de proposta"}
            modules={modules}
            formats={formats}
          />
        </div>

        <button style={{ cursor: 'pointer', padding: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc', marginRight: '4px', marginTop: '8px' }}>Salvar</button>
      </div>
    </div>
  );
}

