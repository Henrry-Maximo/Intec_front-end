import React from 'react';
import { Card } from 'react-bootstrap';
import '../../StyleComponents/nomeExibicao.css';

function index() {

  const usuarioLogadoString =  localStorage.getItem('_user_logado');

  const regNumber = JSON.parse(sessionStorage.getItem('regNumber'));
  const regClass = JSON.parse(sessionStorage.getItem('regClass'));

  var user = usuarioLogadoString
  
  return (
    <>
      {user !== null ?
        <div >
          <Card className='usuario-logado' >
            <Card.Body >
              <Card.Title>{user}, seja bem-vindo (a)!</Card.Title>
              <Card.Title>{regClass} {regNumber}</Card.Title> 
            </Card.Body>
          </Card>
        </div>
        : ''}
    </>
  )
}

export default index