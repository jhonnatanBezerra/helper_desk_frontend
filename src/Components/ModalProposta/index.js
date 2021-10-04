import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr'
import { Api } from '../../Services/Api';
import { PersonalInput, PersonalSelect, PersonalInputCNPJ, PersonalInputTelephone } from '../PersonalInput';

export const ModalProposta = ({ closeModal }) => {


  const [listTypeClient, setListTypeClient] = useState(null);
  const [selectedTypeClient, setSelectedTypeClient] = useState(null);

  const [listPlan, setListPlans] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [CNPJ, setCNPJ] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [company, setCompany] = useState(null);
  const [city, setCity] = useState(null);
  const [responsible, setResponsible] = useState(null);

  useEffect(() => {
    getAllPlans();
    getAllTypesClient();
  }, [])


  const getAllPlans = async () => {
    try {
      const { data } = await Api.get('list_plans');
      setListPlans(data);
    } catch (error) {
      console.log('Get all plans error ', error);
    }

  }

  const getAllTypesClient = async () => {
    try {
      const { data } = await Api.get('list_type_clients');
      setListTypeClient(data);
    } catch (error) {
      console.log('Get all types client error ', error);
    }

  }

  const saveProposal = async () => {

    const data = {
      'nomeEmpresa': company,
      'cnpj': CNPJ,
      'cidade': city,
      'responsavel': responsible,
      'telefone': telephone,
      'tipoClienteId': selectedTypeClient ? selectedTypeClient : listTypeClient[0].id,
      'propostaModelId': selectedPlan ? selectedPlan : listPlan[0].id,
    }

    try {
      const response = await Api.post('create_proposta', data);
      console.log('resposta -> ', response);
    } catch (error) {
      console.log('Save proposal error ', error);
    }

  }



  return (
    <div style={{ background: 'rgba(0,0,0,0.3)', position: 'absolute', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <div style={{ background: '#f8f8f8', height: '100%', width: '35%', position: 'relative', padding: '.5rem', display: 'flex', flexDirection: 'column' }}>

        <GrClose style={{ position: 'absolute', fontSize: '22px', top: '4px', right: '4px', cursor: 'pointer' }} onClick={closeModal} />

        <h1 style={{ textAlign: 'center' }}>Nova proposta</h1>

        <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem 3rem', flex: '1', overflow: 'auto', }}>

          <PersonalSelect label="Tipo cliente" optionsList={listTypeClient} setSelected={setSelectedTypeClient} />
          <PersonalSelect label="Plano de assinatura" optionsList={listPlan} setSelected={setSelectedPlan} />

          <PersonalInput label="Empresa" setChange={setCompany} />
          <PersonalInputCNPJ label="CNPJ" setChange={setCNPJ} />
          <PersonalInput label="Cidade" setChange={setCity} />
          <PersonalInput label="Responsavel" setChange={setResponsible} />
          <PersonalInputTelephone label="Telefone" setChange={setTelephone} />

          {selectedTypeClient === 2 &&
            <>
              <PersonalInput label="Outro" />
              <PersonalInput label="Outro" />
              <PersonalInput label="Outro" />
              <PersonalInput label="Outro" />
              <PersonalInput label="Outro" />
              <PersonalInput label="Outro" />
            </>
          }


        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '8px' }}>
          <button onClick={saveProposal} style={{ padding: '1rem', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}>Salvar</button>
        </div>

      </div>
    </div>
  );
}
