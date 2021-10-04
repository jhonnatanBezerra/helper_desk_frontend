import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header';
import { BiAddToQueue, BiEditAlt } from 'react-icons/bi'
import { ModalQuill } from '../../Components/ModalQuill';
import { Api } from '../../Services/Api';
import { ModalQuillToEdit } from '../../Components/ModalQuillToEdit';


export const Configuracoes = () => {

  const [modalQuill, setModalQuill] = useState(false);
  const [modalQuillEdit, setModalQuillEdit] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    getAllPlans();
  }, []);

  const getAllPlans = async () => {
    try {
      const { data } = await Api.get('list_plans');
      setPlans(data)
    } catch (error) {
      console.log('Get all plans error ', error);
    }

  }

  const closeModal = () => {
    getAllPlans();
    setModalQuill(false);
    setModalQuillEdit(false);
  }

  const openEditModal = (plan) => {
    setModalQuillEdit(true);
    setSelectedPlan(plan)
  }


  return (
    <>
      {modalQuill && <ModalQuill closeModal={closeModal} />}

      {modalQuillEdit && <ModalQuillToEdit plan={selectedPlan} closeModal={closeModal} />}

      <div style={{ background: '#f8f8f8', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }} >
        <Header />

        <div style={{ display: 'flex', height: 'calc(100% - 50px)', }}>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }} >

            <div style={{ border: '1px solid #ccc', padding: '1rem' }}>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', margin: '32px 0' }}>
                <h1 style={{ fontSize: '2rem' }}>Meus planos de assinatura</h1>
                <BiAddToQueue onClick={() => setModalQuill(true)} style={{ marginLeft: '16px', fontSize: '32px', cursor: 'pointer' }} />
              </div>


              {plans ?

                plans.map((plano) => (
                  <>
                    <div key={plano.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                      <p style={{ fontSize: '1.5rem' }}>{plano.nome}</p>
                      <BiEditAlt onClick={() => openEditModal(plano)} style={{ cursor: 'pointer', marginLeft: '16px', fontSize: '1.5rem' }} />
                    </div>
                  </>
                ))

                :

                <p style={{ fontSize: '1.5rem' }}>Nenhum plano cadastrado até o momento</p>

              }

            </div>

          </div>

        </div>
      </div >

    </>
  );
}
