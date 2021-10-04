import { BsSearch } from 'react-icons/bs'
import { BiAddToQueue, } from 'react-icons/bi';
import { CgArrowsExchange } from 'react-icons/cg';
import { CardsProposta } from "../../Components/CardsProposta"
import { ModalProposta } from '../../Components/ModalProposta';
import { useEffect, useState } from 'react';
import { Header } from '../../Components/Header';
import { Api } from '../../Services/Api';

import './styles.css';

export const Home = () => {

  const [modalCadastroProposta, setModalCadastroProposta] = useState(false);

  const [listPropsal, setListPropsal] = useState(null);

  useEffect(() => {
    getAllOpenPropsal();
  }, [])

  const getAllOpenPropsal = async () => {

    try {
      const { data } = await Api.get('list_open_proposal');
      setListPropsal(data);
    } catch (error) {
      console.log('Get all open propsal error ', error);
    }

  }

  return (
    <>
      {modalCadastroProposta && <ModalProposta closeModal={() => setModalCadastroProposta(false)} />}

      <div style={{ background: '#f8f8f8', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }} >
        <Header />

        <div style={{ display: 'flex', height: 'calc(100% - 50px)', }}>

          <aside style={{ width: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '.5rem', borderRight: '1px solid #ccc', }} >

            <div style={{ display: 'flex', alignItems: 'center', height: '35px', justifyContent: 'space-between' }} >

              <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0 .5rem', borderRadius: '4px', border: '1px solid rgba(8,8,8,0.3)' }}>
                <input type="text" placeholder="Pesquisar proposta" style={{ width: '100%', height: '100%', background: 'none', border: 'none', fontSize: '18px' }} />
                <BsSearch size={25} color="#333" />
              </div>

              <div style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                <BiAddToQueue size={30} color="#333" style={{ cursor: 'pointer', }} onClick={() => setModalCadastroProposta(true)} />
              </div>


            </div>

            <div className="filter" style={{ margin: '8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '18px' }} >Filtrando por: {listPropsal && 'verdade'} </span>
              <CgArrowsExchange className="iconChange" size={20} />
            </div>


            <div style={{ flex: '1', overflow: 'auto' }}>
              {listPropsal && listPropsal.map((proposta) => (
                <CardsProposta key={proposta.id} data={proposta} />
              ))}

            </div>


          </aside>

          <div style={{ display: 'flex', flexDirection: 'column', padding: '.5rem', borderRight: '1px solid #ccc', width: '100%', overflow: 'auto' }} >

            <button style={{ cursor: 'pointer', padding: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc', marginRight: '4px', marginTop: '8px' }}>Salvar</button>
            <button style={{ cursor: 'pointer', padding: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc', marginRight: '4px', marginTop: '8px' }}>Salvar</button>


          </div>

        </div>
      </div>
    </>
  )
}